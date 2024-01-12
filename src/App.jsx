import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

const App = () => {
    return (
        <div className="flex flex-row justify-between gap-5 px-5">
            <Sidebar className="w-[20%]" />
            <div className="w-[80%]">
                <Navbar />
                <Recommended />
                <Products />
            </div>
        </div>
    );
};

export default App;
