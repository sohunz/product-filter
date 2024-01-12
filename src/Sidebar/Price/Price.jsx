import Input from "../../components/Input";

const Price = () => {
    return (
        <div>
            <p className="font-bold text-xl pb-3 mt-5">Price</p>
            <div className="flex flex-col gap-3">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </div>
        </div>
    );
};

export default Price;
