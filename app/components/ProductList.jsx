import Image from "next/image";
import { products } from "../../data/products";

export default function ProductList() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        პროდუქცია
      </h2>

      {products.map((category) => (
        <div key={category.category} className="mb-12">
          {/* კატეგორიის სახელი */}
          <h3 className="text-2xl font-semibold mb-6">
            {category.category}
          </h3>

          {/* პროდუქტის ბარათები */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 shadow"
              >
                {/* სურათი (თუ გინდა, შეგიძლია დაამატო image property თითოეულ item-ში) */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="rounded"
                  />
                )}

                <h4 className="text-xl font-semibold mt-3">
                  {item.name}
                </h4>

                <p>ზომა: {item.size}</p>
                {item.length && <p>სიგრძე: {item.length}</p>}

                <p className="font-bold mt-2">
                  {item.price} ₾
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}