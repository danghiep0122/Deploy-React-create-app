import { Link } from "react-router-dom";
import "./App.scss";
import Router from "./routes/Router";

function App() {
    return (
        <main className="App">
            <header>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/products"}>Product</Link>
                    </li>
                </ul>
            </header>
            <Router />
        </main>
    );
}

export default App;
