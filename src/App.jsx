import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/sharedComponents/Navbar";
import SingleProductPage from "./Pages/SingleProductPage";
import ShopPage from "./Pages/ShopPage";
import CategoryPage from "./Pages/CategoryPage";
import Homepage from "./Pages/Homepage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
            <Route
              path="/product/:id"
              element={<SingleProductPage></SingleProductPage>}
            ></Route>
            <Route
              path="/category/:category"
              element={<CategoryPage></CategoryPage>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
