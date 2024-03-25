import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useCategoryStore from "../features/categoryView.js"; // Import the Zustand store
import ProductCard from "../components/cardComponents/ProductCard.jsx";
import Banner from "../components/sharedComponents/Banner.jsx";

export default function CategoryPage() {
  const { category } = useParams();
  const { data: products, status, getSingleCategory } = useCategoryStore();

  useEffect(() => {
    getSingleCategory(category);
  }, [category, getSingleCategory]);

  return (
    <>
      <Banner bannerTitle={category}></Banner>
      <div className="flex md:max-w-3xl lg:max-w-6xl px-4 mx-auto pb-20">
        <div className="grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center mx-auto">
          {status === "succeeded" ? (
            products.map((item) => (
              <ProductCard
                id={item.id}
                image={item.image}
                price={item.price}
                key={item.id}
                title={item.title}
                rate={item.rating.rate}
                count={item.rating.count}
              ></ProductCard>
            ))
          ) : status === 'loading' ? (
            <div className="absolute text-center w-full h-full">
              <span className="loading loading-spinner loading-lg mt-20"></span>
            </div>
          ) : (
            <div className="text-center">Failed to load data.</div>
          )}
        </div>
      </div>
    </>
  );
}
