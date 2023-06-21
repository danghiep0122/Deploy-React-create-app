import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    return (
        <main className="content">
            <div className="box">
                <h1>Product {id}</h1>
            </div>
        </main>
    );
}
