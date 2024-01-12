const Category = () => {
    return (
        <div>
            <p className="font-bold text-xl pb-3">Category</p>
            <div className="flex flex-col gap-2">
                <div>
                    <input type="radio" name="test"/>
                    <label className="px-3">All</label>
                </div>
                <div>
                    <input type="radio" name="test"/>
                    <label className="px-3">Sneakers</label>
                </div>
                <div>
                    <input type="radio" name="test"/>
                    <label className="px-3">Flats</label>
                </div>
                <div>
                    <input type="radio" name="test"/>
                    <label className="px-3">Sandls</label>
                </div>
                <div>
                    <input type="radio" name="test"/>
                    <label className="px-3">Heals</label>
                </div>
            </div>
        </div>
    );
};

export default Category;
