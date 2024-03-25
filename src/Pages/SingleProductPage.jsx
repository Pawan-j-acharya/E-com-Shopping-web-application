import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSingleProductStore from '../features/singleProductView.js';
import useCartStore from '../features/cartView.js'; // Import the cart store

function SingleProductPage() {
  const { id } = useParams();
  const { product, status, getSingleProduct } = useSingleProductStore();
  const addToCart = useCartStore((state) => state.addToCart); // Access addToCart function from the cart store

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getSingleProduct(id);
  }, [getSingleProduct, id]);

  const handleInputChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ id: product.id, price: product.price, quantity }); // Call addToCart with the product id, price, and quantity
  };

  return (
    <>
      {status === 'loading' ? (
        <div className="absolute text-center w-full h-full">
          <span className="loading loading-spinner loading-lg mt-20"></span>
        </div>
      )  : (
        <>
          <div className="flex flex-col items-center px-6">
            <figure className="py-8 w-full bg-white">
              <img
                className="m-auto"
                src={product.image}
                width="250"
                alt={`${product.title} image`}
              ></img>
            </figure>
            <h1 className="text-xl w-full py-2">{product.title}</h1>
            <div className="w-full">
              <h1 className="font-bold italic text-xl text-blue-700">
                USD ${product.price}
              </h1>

              <button
                onClick={handleAddToCart}
                className="btn btn-accent btn-wide px-0 rounded-md mt-8 mr-2"
              >
                <label
                  className="btn btn-square w-full"
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                >
                  Add to cart
                </label>
              </button>
              <span>
                <input
                  onChange={handleInputChange}
                  value={quantity}
                  type="number"
                  min="1"
                  className="input input-accent input-md w-24"
                ></input>
              </span>
            </div>

            <div className="collapse bg-slate-100 collapse-arrow border-t-[1px] border-b-[1px] border-gray-400 rounded-none mt-6">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                description
              </div>
              <div className="collapse-content">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SingleProductPage;
