import Navbar from "./Navigation/Navbar";
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import "./index.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <Products />
            <Recommended />
        </div>
    )
};

export default App;
