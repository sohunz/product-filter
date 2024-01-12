import Input from "../../components/Input";

const Color = () => {
    return (
        <div>
            <p className="font-bold text-xl pb-3 mt-3">Color</p>
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

export default Color;
