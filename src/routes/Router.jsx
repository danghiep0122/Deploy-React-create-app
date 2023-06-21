import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import HomePage from "../Pages/Home";
import Products from "../Pages/productPages/Products";
import Product from "../Pages/productPages/Product";
import NewProduct from "../Pages/productPages/NewProduct";
import SelectProduct from "../Pages/productPages/SelectProduct";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />}>
                    <Route index element={<SelectProduct />} />
                    <Route path=":id" element={<Product />} />
                    <Route path="new" element={<NewProduct />} />
                </Route>
            </Routes>
        </>
    );
}
