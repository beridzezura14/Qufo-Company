"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { products } from "../../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductList() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-14 text-center text-gray-800">
        პროდუქცია
      </h2>

      {products.map((category) => {
        const prevRef = useRef(null);
        const nextRef = useRef(null);
        const paginationRef = useRef(null);

        return (
          <div key={category.category} className="mb-20">
            {/* 🔥 Header + Arrows */}
            <div className="flex justify-between items-end mb-6 gap-2">
              <h3 className="text-3xl font-semibold text-gray-700">
                {category.category}
              </h3>

              <div className="flex gap-3">
                <button
                  ref={prevRef}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  ←
                </button>

                <button
                  ref={nextRef}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  →
                </button>
              </div>
            </div>

            {/* 🔥 Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.params.pagination.el = paginationRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12 "
            >
              {category.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-white rounded-2xl shadow-md p-6 mb-2 flex flex-col h-full">
                    {item.image && (
                      <div className="relative w-full h-72 mb-5 rounded-xl overflow-hidden">
                        <Image
                          src={item.image[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>

                    <p className="text-sm">ზომა: {item.size}</p>

                    {item.length && (
                      <p className="text-sm">სიგრძე: {item.length}</p>
                    )}

                    <p className="text-green-600 font-bold text-lg mt-4">
                      {item.price} ₾
                    </p>

                    <Link
                      href={`/products/${item.id}`}
                      className="mt-auto underline text-blue-600"
                    >
                      ნახე დეტალურად
                    </Link>
                  </div>
                </SwiperSlide>
              ))}

              {/* 🔵 Dots */}
              <div
                ref={paginationRef}
                className="flex justify-center mt-10"
              />
            </Swiper>
          </div>
        );
      })}
    </section>
  );
}
