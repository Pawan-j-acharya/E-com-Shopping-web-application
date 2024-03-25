import { useEffect } from "react";
import useShopStore from "../features/shopView";
import Banner from "../components/sharedComponents/Banner";
import ProductCard from "../components/cardComponents/ProductCard";


export default function ShopPage() {
   
    const {data ,status , getAllProducts} = useShopStore();

    useEffect(()=>{
      getAllProducts();
      
    },[getAllProducts]);

    if (status === 'loading') {
      return  (
        <div className="absolute text-center w-full h-full">
          <span className="loading loading-spinner loading-lg mt-20"></span>
        </div>
      ) 
    }
  
    if (status === 'failed') {
      return <div>Error fetching products.</div>;
    }
  
    return (
      <>
        <Banner bannerTitle="shop"></Banner>
        <div className="flex md:max-w-3xl lg:max-w-6xl px-4 mx-auto pb-20">
          <div className="grid gap-4  lg:gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center mx-auto">
            {status === "loading" ? (
              <div className="absolute text-center w-full h-ful">
                <span className="loading loading-spinner loading-lg mt-20"></span>
              </div>
            ) : 
            (
              data.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  rate={item.rating.rate}
                  count={item.rating.count}
                ></ProductCard>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
  