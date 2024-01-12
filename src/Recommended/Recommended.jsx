const Recommended = () => {
    return (
        <div className="py-5">
            <p className="text-2xl font-bold py-5">Recommended</p>
            <div className="flex flex-row gap-3 flex-wrap pb-5">
                <button className="border px-3 py-1 rounded-md">
                    All Products
                </button>
                <button className="border px-3 py-1 rounded-md">Nike</button>
                <button className="border px-3 py-1 rounded-md">Adidas</button>
                <button className="border px-3 py-1 rounded-md">Puma</button>
                <button className="border px-3 py-1 rounded-md">Vans</button>
            </div>
        </div>
    );
};

export default Recommended;
