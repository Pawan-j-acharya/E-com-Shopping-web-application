import { Link, Outlet } from "react-router-dom";
import DesktopMenu from "../menuComponents/DesktopMenu";
import Footer from "./Footer";
import Cart from "../cartComponents/Cart";
import MobileMenu from "../menuComponents/MobileMenu";

export default function Navbar(){

    const NavigateToTop = () => {
        window.scroll(0,0);
    }

    return(
        <>
            <div className="min-h-lvh bg-slate-100">
                <div className="flex bg-white  justify-between shadow-md sticky z-10 top-0 min-h-20 items-center px-4">
                    <MobileMenu />
                    <div className="lg:hidden w-full text-center">
                        <Link onClick={NavigateToTop} to="/" className="btn btn-ghost text-xl">FakeStore</Link>
                    </div>
                    <DesktopMenu />
                    <Cart />
                </div>
                <Outlet></Outlet>
            </div>
            <Footer /> 
        </>
    );
}


