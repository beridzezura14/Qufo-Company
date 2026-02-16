export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20 px-5">
      {/* ორ სვეტი ზედა ნაწილი */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* სანიაღვრე არხები */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-300">
          <div className="w-24 h-24 mb-4">
            {/* სურათი ან icon */}
            {/* <img
              src="/images/drain-icon.png"
              alt="სანიაღვრე არხები"
              className="w-full h-full object-contain"
            /> */}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            სანიაღვრე არხები
          </h3>
          <p className="text-gray-600 mb-6">
            მაღალი ხარისხის სანიაღვრე არხები ზედაპირული წყლის გასატანად.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            დეტალურად
          </button>
        </div>

        {/* რკინა-ბეტონის ჭები */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-300">
          <div className="w-24 h-24 mb-4">
            {/* <img
              src="/images/well-icon.png"
              alt="რკინა-ბეტონის ჭები"
              className="w-full h-full object-contain"
            /> */}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            რკინა-ბეტონის ჭები
          </h3>
          <p className="text-gray-600 mb-6">
            სტანდარტული რკინა-ბეტონის ჭები ყველა ზომაში.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            დეტალურად
          </button>
        </div>
      </div>

      {/* ქვედა სრული სიგანე */}
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-black to-gray-800 text-white p-12 rounded-3xl shadow-xl text-center transform hover:scale-105 transition duration-300">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          დაკვეთით პროდუქცია
        </h3>
        <p className="text-gray-200 mb-8 text-lg md:text-xl">
          გვითხარით თქვენ რა გჭირდებათ, ჩვენ დაგიმზადებთ
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
          დეტალურად
        </button>
      </div>
    </section>
  );
}