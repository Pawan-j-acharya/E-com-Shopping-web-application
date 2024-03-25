import CartButton from "./CartButton";
import CartSideBar from "./CartSideBar";

export default function Cart() {
  return (
    <>
     <div>
        <div className="drawer-end">
          <CartButton ></CartButton>
          <CartSideBar></CartSideBar>
        </div>
      </div>
    </>
  );
}
