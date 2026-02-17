"use client";

import { use, useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";

export default function ProductPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { id } = params;
  const [contactOpen, setContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  let product;
  let productCategory;
  for (let category of products) {
    product = category.items.find((item) => item.id === id);
    if (product) {
      productCategory = category;
      break;
    }
  }

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">პროდუქტი ვერ მოიძებნა</h1>
        <Link
          href="/products"
          className="text-blue-600 mt-4 inline-block underline hover:text-blue-800"
        >
          დაბრუნება პროდუქციის გვერდზე
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* კონკრეტული პროდუქტი */}
      <div className="bg-white shadow-md rounded-lg px-6 py-18 border border-gray-100 hover:shadow-lg transition">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
          <p>
            <span className="font-semibold">ზომა:</span> {product.size || "-"}
          </p>
          {product.length && (
            <p>
              <span className="font-semibold">სიგრძე:</span> {product.length}
            </p>
          )}
          <p>
            <span className="font-semibold">ფასი:</span>{" "}
            <span className="text-green-600 font-bold">{product.price} ₾</span>
          </p>
        </div>

        {/* ღილაკი პოპაპისთვის */}
        <button
          onClick={() => {
            setContactOpen(true);
            setSubmitted(false);
          }}
          className="cursor-pointer mt-12 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          შესაკვეთად დაგვიკავშირდით
        </button>
      </div>

      {/* კატეგორიის სხვა პროდუქტები */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          ყველა პროდუქტი: {productCategory.category}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategory.items.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.id}`}
              className={`block p-4 rounded-lg border transition hover:shadow-lg hover:bg-gray-50 ${
                item.id === id ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.size}</p>
              <p className="text-green-600 font-bold mt-2">{item.price} ₾</p>
            </Link>
          ))}
        </div>
      </div>

      {/* კონტაქტი */}
      <div className="flex flex-col sm:flex-row gap-6 mt-8 text-gray-700">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500" /> მცხეთა, საქართველო
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-gray-500" /> +995 555 11 22 33
        </div>
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <FaEnvelope className="text-gray-400" /> info@concrete.ge
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block mt-6 text-blue-600 underline hover:text-blue-800"
      >
        უკან პროდუქციის სიაში
      </Link>

      {/* Contact Modal */}
{/* Contact Modal */}
{contactOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
    onClick={() => setContactOpen(false)}
  >
    <div
      className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg"
        onClick={() => setContactOpen(false)}
      >
        <FaTimes />
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        დაგვიკავშირდით
      </h2>

      {/* Contact info */}
      <div className="mb-6 text-gray-700 space-y-3">
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <FaMapMarkerAlt className="text-gray-400" /> მცხეთა, საქართველო
        </div>
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <FaPhoneAlt className="text-gray-400" /> +995 555 11 22 33
        </div>
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <FaEnvelope className="text-gray-400" /> info@concrete.ge
        </div>
      </div>

      {/* Form or success message */}
      {submitted ? (
        <p className="text-green-600 font-medium mt-4 text-center text-lg">
          მადლობა! მალე დაგიკავშირდებით.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="სახელი"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="ტელეფონი"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold text-lg py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            გაგზავნა
          </button>
        </form>
      )}
    </div>
  </div>
)}
    </div>
  );
}