/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
export default function Drawer({ handleShowMenu, showMenu }) {
  return (
    <div>
      <input
        id="my-drawer"
        type="checkbox"
        checked={showMenu}
        onChange={handleShowMenu}
        className="drawer-toggle"
      />
      <div className="drawer-conten">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={handleShowMenu}
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <p className="font-bold text-2xl m-auto mb-6">MENU</p>
          </li>
          <li>
            <Link onClick={handleShowMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleShowMenu} to="shop">
              Shop
            </Link>
          </li>
          <li>
            <p>Categories </p>
            <ul>
              <li>
                <Link onClick={handleShowMenu} to="category/jewelery">
                  Jewelries
                </Link>
              </li>
              <li>
                <Link onClick={handleShowMenu} to="category/electronics">
                  Electronics
                </Link>
              </li>
              <li>
                <Link onClick={handleShowMenu} to="category/women's-clothing">
                  Women&apos;s
                </Link>
              </li>
              <li>
                <Link onClick={handleShowMenu} to="category/men's-clothing">
                  Men&apos;s
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
