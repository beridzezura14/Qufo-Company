// app/products/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        პროდუქცია
      </h1>

      {products.map((category) => (
        <div key={category.category} className="mb-16">
          {/* კატეგორიის სახელი */}
          <h2 className="text-3xl font-semibold mb-8 text-gray-700">
            {category.category}
          </h2>

          {/* პროდუქტის ბარათები */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col"
              >
                {/* სურათი */}
                {item.image && (
                  <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                )}

                {/* პროდუქტის ინფორმაცია */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  ზომა: <span className="font-medium">{item.size}</span>
                </p>
                {item.length && (
                  <p className="text-gray-600 text-sm">
                    სიგრძე: <span className="font-medium">{item.length}</span>
                  </p>
                )}
                <p className="text-green-600 font-bold text-lg mt-3">
                  {item.price} ₾
                </p>

                <span className="mt-auto text-blue-600 hover:text-blue-800 font-medium underline">
                  დეტალურად
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}