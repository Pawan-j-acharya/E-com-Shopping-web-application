import React from 'react';
import useCartStore from '../../features/cartView.js';
import CartProductCard from './CartProductCard.jsx'; // Import the cart store

export default function CartSideBar() {
  const products = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal);

  return (
    <>
      <div className="drawer-side z-10 ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-6 min-h-full bg-base-200 w-80 lg:w-96 md:w-96">
          {/* Sidebar content here */}
          <li className="flex justify-between items-center mb-6">
            <p className="text-xl font-bold">MY CART: </p>
            <label
              className="btn btn-square btn-outline"
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </li>
          {/* PRODUCTS ADDED IN CART WILL BE ADDED AS NEW LIST  */}
          {products.map((product) => (
            <CartProductCard
              key={product.id}
              id={product.id}
              quantity={product.quantity}
            />
          ))}
          <li>
            {/* SUBTOTAL and CHECKOUT BUTTON */}
            <div
              className={`${products.length ? 'flex' : 'hidden'} self-end flex-col items-center mb-6`}
            >
              <p className="text-black text-xl font-bold my-4">
                SUBTOTAL : ${subtotal.toFixed(2)}
              </p>
              <button className="btn-secondary btn btn-wide">Checkout</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
