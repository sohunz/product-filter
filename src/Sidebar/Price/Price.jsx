import Input from "../../components/Input";

const Price = ({ handleChange }) => {
    return (
        <div>
            <p className="font-bold text-xl pb-3 mt-5">Price</p>
            <div className="flex flex-col gap-3">
                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value=""
                        name="test2"
                    />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    handleChange={handleChange}
                    value={50}
                    title="$0 - $50"
                    name="test2"
                />
                <Input
                    handleChange={handleChange}
                    value={100}
                    title="$50 - 100"
                    name="test2"
                />
                <Input
                    handleChange={handleChange}
                    value={150}
                    title="$100 - $150"
                    name="test2"
                />
                <Input
                    handleChange={handleChange}
                    value={200}
                    title="$150 - $200"
                    name="test2"
                />
                <Input
                    handleChange={handleChange}
                    value={250}
                    title="$200 - $250"
                    name="test2"
                />
            </div>
        </div>
    );
};

export default Price;
