import Card from "../components/Card";
import data from "../../db/data.js";
import { useState } from "react";
import Recommended from "../Recommended/Recommended.jsx";

const Products = () => {
    const [products, setProducts] = useState(data);

    const filterProducts = (companyName) => {
        if (companyName === "") {
            setProducts(data);
        } else {
            setProducts(data.filter((item) => item.company === companyName));
        }
    };

    return (
        <div className="mx-auto">
            <Recommended funFilter={filterProducts} />
            <div className="lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid gap-5">
                <Card product={products} />
            </div>
        </div>
    );
};

export default Products;
