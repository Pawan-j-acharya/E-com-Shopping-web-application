/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";
import { useState } from "react";

export default function ProductCard({ id, title, price, image, rate, count }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImgLoaded(true);
  };
  
  const titleShorten =
    title.length > 30 ? title.slice(0, 25).trim() + ".." : title;
  const navigateToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <Link
        className="w-full h-full"
        onClick={navigateToTop}
        to={`/product/${id}`}
      >
        <div className="card card-compact h-full w-full bg-white shadow-md border-[1px] my-4 flex flex-col justify-end">
          <figure className="px-6 py-4 h-36">
            {imgLoaded || <CardSkeleton></CardSkeleton>}
            <img
              onLoad={handleImageLoaded}
              width={200}
              src={image}
              className="rounded-sm h-full w-full object-contain object-center"
              alt={title}
            />
          </figure>
          <div className="card-body h-max flex flex-col items-start">
            <h2 className="card-title max-h-8">
              <dfn
                title={title}
                className="not-italic text-sm
              "
              >
                {titleShorten}
              </dfn>
            </h2>
            <p className="italic text-md mb-4">${price}</p>
            <p className="text-xs">Rating: {rate}⭐({ count})</p>
          </div>
        </div>
      </Link>
    </>
  );
}
