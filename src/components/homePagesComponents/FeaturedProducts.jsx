import { useEffect, useState } from "react";
import { featuredProductList } from "../../features/HomePageProductList";
import ProductCard from "../../components/cardComponents/ProductCard";

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  useEffect(() => {
    let responses;
    let data;
    async function fetchAll(ids) {
      responses = await Promise.all(
        ids.map((id) => fetch(`https://fakestoreapi.com/products/${id}`))
      );
      data = await Promise.all(responses.map((response) => response.json()));
      setFeaturedProducts(data);
    }
    fetchAll(featuredProductList);
  }, []);

  return (
    <div className="w-full">
      <ul className="flex flex-wrap m-auto lg:max-w-max justify-center px-4 gap-2 lg:gap-8 xl:gap-12">
        {featuredProducts?.map((item) => (
          <li
            key={item.id}
            className="max-w-40 sm:w-32 md:w-40 lg:max-w-48 xl:w-96"
          >
            <ProductCard
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
              rate={item.rating.rate}
              count={item.rating.count}
            ></ProductCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
