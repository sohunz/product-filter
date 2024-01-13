import Input from "../../components/Input";

const Color = ({ handleChange }) => {
    return (
        <div>
            <p className="font-bold text-xl pb-3 mt-3 text-orange-500">Color</p>
            <div className="flex flex-col gap-3">
                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value=""
                        name="test1"
                        defaultChecked
                    />
                    <span className="checkmark all"></span>
                    All
                </label>
                <Input
                    handleChange={handleChange}
                    value="black"
                    title="Black"
                    name="test1"
                    color="black"
                />
                <Input
                    handleChange={handleChange}
                    value="blue"
                    title="Blue"
                    name="test1"
                    color="bleu"
                />
                <Input
                    handleChange={handleChange}
                    value="red"
                    title="Red"
                    name="test1"
                    color="red"
                />
                <Input
                    handleChange={handleChange}
                    value="green"
                    title="Green"
                    name="test1"
                    color="green"
                />
                <Input
                    handleChange={handleChange}
                    value="white"
                    title="White"
                    name="test1"
                    color="white"
                />
            </div>
        </div>
    );
};

export default Color;
