const Products = ({ result }) => {
    return (
        <div className="mx-auto mb-10">
            <div className=" xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid gap-5">
                {result}
            </div>
        </div>
    );
};

export default Products;
