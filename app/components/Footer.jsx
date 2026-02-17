import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../img/cha.png"; // შენი ლოგოს path

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* <img src={logo.src} alt="Concrete Logo" className="w-28 md:w-32 object-contain" /> */}
          <h1 className="text-4xl lg:text-6xl font-bold">Concrete</h1>
          <p className="text-gray-300 text-center md:text-left text-sm">
            Concrete – ხარისხიანი სამშენებლო პროდუქტები. ჩვენ გთავაზობთ მრავალფეროვან პროდუქციას,
            რომელიც გამოკვეთილია სიმძლავრითა და გამძლეობით.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">კონტაქტი</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-gray-400" /> მცხეთა, საქართველო
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaPhoneAlt className="text-gray-400" /> +995 555 11 22 33
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-gray-400" />info@concrete.ge
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">მოგვყევით</h3>
          <div className="flex gap-3">
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-black rounded-full text-white hover:opacity-80 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-gray-400 text-sm text-center">
        © 2026 Concrete. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}