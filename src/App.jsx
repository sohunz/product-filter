import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

const App = () => {
    return (
        <div className="flex flex-row justify-between gap-5 px-5">
            <Sidebar className="max-w-[200px]"/>
            <div>
                <Navbar />
                <Recommended />
                <Products />
            </div>
        </div>
    );
};

export default App;
