import { Link, Outlet } from "react-router-dom";

function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <Link to={"/products"}>All Products</Link>
            <br />

            <Outlet />
        </>
    );
}

export default Products;
