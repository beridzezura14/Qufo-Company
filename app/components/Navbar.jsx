"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import { products } from "@/data/products";

import cha from "../img/cha.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white text-xs sm:text-sm py-2 px-8">
        <div className="max-w-full flex justify-end">
          <span>ტელ: 555 12 34 56</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow ">
        <div className="max-full mx-auto flex justify-between items-center py-3 px-8">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-black">Concrete</h1>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
            <Link href="/" className="p-2.5 hover:text-black">
              მთავარი
            </Link>

            {/* Products dropdown */}
            <div className="group">
              <Link href="/products" className="p-2.5 hover:text-black">
                პროდუქცია
              </Link>

              {/* Dropdown */}
              {/* <div className="absolute left-0 top-full w-full  shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex items-center px-12 -mt-4 bg-white">
                <div className="grid grid-cols-3 gap-6 w-[70%] py-20">
                  {products.map((category) => (
                    <div key={category.category}>
                      <h3 className="font-bold text-black mb-4">
                        {category.category}
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {category.items.map((item) => (
                          <li key={item.id}>
                            <Link href={`/products/${item.id}`} className="hover:text-black block">
                              {item.name} ({item.size}) - {item.price} ₾
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="w-[30%] h-full">
                  <img
                    src={cha.src}
                    alt="Concrete products"
                    className="object-cover h-full w-full rounded-r"
                  />
                </div>
              </div> */}
            </div>

            {/* Contact button + burger */}
            <div className="flex items-center gap-3">
              <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
                დაგვიკავშირდი
              </button>

              <button
                className="flex flex-col justify-between w-6 h-5 cursor-pointer ml-2"
                onClick={() => setContactOpen(true)}
              >
                <span className="block h-0.5 w-full bg-black rounded"></span>
                <span className="block h-0.5 w-full bg-black rounded"></span>
                <span className="block h-0.5 w-full bg-black rounded"></span>
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div
            className="md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block h-1 w-full bg-black rounded-2xl transform transition duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-1 w-full bg-black rounded-2xl transition duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-1 w-full bg-black rounded-2xl transform transition duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-[80%] bg-white shadow-lg transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
        >
          <div className="flex flex-col mt-20 gap-6 px-6 text-gray-700 font-medium">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="py-2 rounded hover:bg-gray-100 w-full text-left"
            >
              მთავარი
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="py-2 rounded hover:bg-gray-100 w-full text-left"
            >
              პროდუქცია
            </Link>
            <button className="bg-black text-white py-2 px-4 rounded w-full text-center hover:bg-gray-800">
              დაგვიკავშირდი
            </button>

            <hr className="border-gray-200 my-2" />

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" /> 2 Leonidze street,
                Tbilisi, Georgia
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-500" /> +995 557 17 17 06
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                  <FaEnvelope className="text-gray-500" /> info@concrete.ge
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white hover:bg-blue-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full text-white hover:bg-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-black rounded-full text-white hover:opacity-80"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop contact slide-out */}
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300
              ${contactOpen ? "opacity-30 pointer-events-auto" : "opacity-0"}`}
            onClick={() => setContactOpen(false)}
          ></div>

          {/* Slide panel */}
          <div
            className={`absolute top-0 right-0 h-full w-[25%] bg-white shadow-lg transform transition-transform duration-300
              ${contactOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}
          >
            <div className="flex flex-col h-full justify-center p-6">
              <h1 className="text-6xl font-bold">Concrete</h1>
              <p className="mt-4">
                <span>/</span> კონტაქტი
              </p>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" /> მცხეთა,
                  საქართველო
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-gray-500" /> +995 555 11 22 33
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <FaEnvelope className="text-gray-500" /> info@concrete.ge
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href="#"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white hover:bg-blue-700"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full text-white hover:bg-pink-600"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-black rounded-full text-white hover:opacity-80"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-40"
            onClick={() => setMobileOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
}
