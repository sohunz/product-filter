const Recommended = ({funFilter}) => {
    return (
        <div className="py-5">
            <p className="text-2xl font-bold py-5">Recommended</p>
            <div className="flex flex-row gap-3 flex-wrap pb-5">
                <button className="border px-3 py-1 rounded-md" onClick={() => funFilter('')}>All Products</button>
                <button className="border px-3 py-1 rounded-md" onClick={() => funFilter('Nike')}>Nike</button>
                <button className="border px-3 py-1 rounded-md" onClick={() => funFilter('Adidas')}>Adidas</button>
                <button className="border px-3 py-1 rounded-md" onClick={() => funFilter('Puma')}>Puma</button>
                <button className="border px-3 py-1 rounded-md" onClick={() => funFilter('Vans')}>Vans</button>
            </div>
        </div>
    )
};

export default Recommended;
