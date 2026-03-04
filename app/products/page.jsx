// app/products/page.jsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid | list

  const categories = ["all", ...products.map((c) => c.category)];

  // ✅ FILTER BY CATEGORY
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;

    return products.filter(
      (category) => category.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <section className="max-w-7xl mx-auto p-6 sm:p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">პროდუქცია</h1>

      {/* ================= VIEW TOGGLE ================= */}
      <div className="flex justify-end mb-6 gap-3">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-3 rounded-xl transition text-xl ${
            viewMode === "grid"
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <BsGridFill />
        </button>

        <button
          onClick={() => setViewMode("list")}
          className={`p-3 rounded-xl transition text-xl ${
            viewMode === "list"
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FaList />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* ================= SIDEBAR ================= */}
        <aside className="lg:w-1/4">
          <div className="bg-white shadow-md rounded-2xl p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-6">კატეგორიები</h2>

            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left px-4 py-2 rounded-xl transition cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {cat === "all" ? "ყველა" : cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ================= PRODUCTS ================= */}
        <div className="lg:w-3/4">
          {filteredProducts.map((category) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-gray-700">
                {category.category}
              </h2>

              {/* GRID OR LIST CONTAINER */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                    : "flex flex-col gap-6"
                }
              >
                {category.items.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-5 flex ${
                      viewMode === "list"
                        ? "flex-row items-center gap-6"
                        : "flex-col"
                    }`}
                  >
                    {/* IMAGE */}
                    {item.image && (
                      <div
                        className={`relative rounded-xl overflow-hidden ${
                          viewMode === "list" ? "w-40 h-32" : "w-full h-60 mb-4"
                        }`}
                      >
                        <Image
                          src={
                            Array.isArray(item.image)
                              ? item.image[0]
                              : item.image
                          }
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* INFO */}
                    <div className="flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-600">ზომა: {item.size}</p>

                      {item.length && (
                        <p className="text-sm text-gray-600">
                          სიგრძე: {item.length}
                        </p>
                      )}

                      <p className="text-green-600 font-bold text-lg mt-3">
                        {item.price} ₾
                      </p>

                      <span className="mt-auto text-blue-600 underline">
                        დეტალურად
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
