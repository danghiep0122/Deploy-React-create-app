import { Link } from "react-router-dom";

export default function SelectProduct() {
    return (
        <>
            <div className="container">
                <Link to={"/products/8"}>
                    <button>Product number 8</button>
                </Link>

                <Link to={"/products/new"}>
                    <button>New Product</button>
                </Link>
            </div>
        </>
    );
}
