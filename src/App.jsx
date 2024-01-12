import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";
import products from "../db/data";
import Card from "./components/Card";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) =>
            product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // ------------ Button Filtering -----------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);
    return (
        <div className="flex flex-row justify-between gap-5 px-5">
            <Sidebar className="w-[20%]" handleChange={handleChange} />
            <div className="w-[80%]">
                <Navbar query={query} handleInputChange={handleInputChange} />
                <Recommended handleClick={handleClick} />
                <Products result={result} />
            </div>
        </div>
    );
};

export default App;
