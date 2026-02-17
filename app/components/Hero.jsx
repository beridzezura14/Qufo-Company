import Link from "next/link";
import heroImage from "../img/hero-bg.jpeg"; // შენი hero ფოტო

export default function Hero() {
  return (
    <section
      className="relative h-[80dvh] sm:h-[90dvh] md:h-[70dvh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-4xl px-4 sm:px-6 md:px-12 space-y-4 sm:space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-tight">
          Concrete – ხარისხიანი პროდუქტები
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          დაგეგმეთ თქვენი პროექტი პროფესიონალებთან ერთად. ასევე ვირებთ შეკვეთებს.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 sm:mt-6 md:mt-8">
          <Link
            href="/products"
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto text-center"
          >
            ნახე პროდუქცია
          </Link>
          <Link
            href="#contact"
            className="border border-white hover:border-yellow-500 hover:text-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto text-center"
          >
            დაგვიკავშირდი
          </Link>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-48 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}