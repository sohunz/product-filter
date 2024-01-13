import Input from "../../components/Input";

const Category = ({ handleChange }) => {
    return (
        <div>
            <p className="font-bold text-xl pb-3 text-orange-500">Category</p>
            <label className="sidebar-label-container">
                <input
                    onChange={handleChange}
                    type="radio"
                    value=""
                    name="test"
                    defaultChecked
                />
                <span className="checkmark"></span>All
            </label>
            <Input
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="sandals"
                title="Sandals"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />
        </div>
    );
};

export default Category;
