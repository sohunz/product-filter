const Products = ({ result }) => {
    return (
        <div className="mx-auto">
            <div className="lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid gap-5">
                {result}
            </div>
        </div>
    );
};

export default Products;
