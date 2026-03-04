"use client";

import { use, useState, useMemo } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

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
        <h1 className="text-3xl font-bold mb-4 text-red-600">
          პროდუქტი ვერ მოიძებნა
        </h1>
        <Link
          href="/products"
          className="text-blue-600 mt-4 inline-block underline hover:text-blue-800"
        >
          დაბრუნება პროდუქციის გვერდზე
        </Link>
      </div>
    );
  }

  // ✅ სურათების მასივი (array ან string ორივე იმუშავებს)
  const images = Array.isArray(product.image) ? product.image : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  // მხოლოდ მიმდინარე კატეგორიის პროდუქტები
  const categoryProducts = productCategory.items;

  // მიმდინარე პროდუქტის ინდექსი კატეგორიაში
  const currentIndex = categoryProducts.findIndex((item) => item.id === id);

  const prevProduct =
    currentIndex > 0 ? categoryProducts[currentIndex - 1] : null;

  const nextProduct =
    currentIndex < categoryProducts.length - 1
      ? categoryProducts[currentIndex + 1]
      : null;

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8">
      {/* ================= PREV / NEXT ================= */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t">
        {/* PREV */}
        {prevProduct ? (
          <Link
            href={`/products/${prevProduct.id}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← {prevProduct.size}
          </Link>
        ) : (
          <span className="text-gray-400">← წინა პროდუქტი არ არსებობს</span>
        )}

        {/* NEXT */}
        {nextProduct ? (
          <Link
            href={`/products/${nextProduct.id}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            {nextProduct.size} →
          </Link>
        ) : (
          <span className="text-gray-400 text-right">შემდეგი პროდუქტი არ არსებობს →</span>
        )}
      </div>
      {/* კონკრეტული პროდუქტი */}
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* IMAGE GALLERY */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-2xl">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full max-h-[500px] object-contain rounded-2xl transition duration-300"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 justify-center flex-wrap">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`border rounded-lg overflow-hidden w-20 h-20 p-1 transition
                      ${
                        selectedImage === img
                          ? "border-blue-600"
                          : "border-gray-300"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`thumb-${index}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {product.name}
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-gray-700">
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">ზომა</span>
                  <span className="font-semibold">{product.size || "-"}</span>
                </div>

                {product.length && (
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">სიგრძე</span>
                    <span className="font-semibold">{product.length}</span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-6">
                  <span className="text-lg sm:text-xl font-semibold text-gray-700">
                    ფასი
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-green-600">
                    {product.price} ₾
                  </span>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <button
              onClick={() => {
                setContactOpen(true);
                setSubmitted(false);
              }}
              className="mt-8 w-full bg-black text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-800 transition shadow-md"
            >
              შეკვეთა
            </button>
          </div>
        </div>
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
                item.id === id
                  ? "border-blue-500 bg-blue-50 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-gray-800 mb-1 mt-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">{item.size}</p>
              <p className="text-green-600 font-bold mt-2">{item.price} ₾</p>
            </Link>
          ))}
        </div>
      </div>

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
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg"
              onClick={() => setContactOpen(false)}
            >
              <FaTimes />
            </button>

            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              დაგვიკავშირდით
            </h2>

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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
                <input
                  type="text"
                  placeholder="ტელეფონი"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
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
