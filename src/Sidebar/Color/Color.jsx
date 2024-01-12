const Color = () => {
    return (
        <div>
            <p className="font-bold text-xl pb-3 mt-3">Color</p>
            <div className="flex flex-col gap-3">
                <div>
                    <input type="radio" name="test1"/>
                    <label className="px-3">All</label>
                </div>
                <div>
                    <input type="radio" name="test1"/>
                    <label className="px-3">Black</label>
                </div>
                <div>
                    <input type="radio" name="test1"/>
                    <label className="px-3">Blue</label>
                </div>
                <div>
                    <input type="radio" name="test1"/>
                    <label className="px-3">Red</label>
                </div>
                <div>
                    <input type="radio" name="test1"/>
                    <label className="px-3">Green</label>
                </div>
                <div>
                    <input type="radio" name="test1"/>
                    <label className="px-3">White</label>
                </div>
            </div>
        </div>
    );
};

export default Color;
