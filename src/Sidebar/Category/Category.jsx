import Input from "../../components/Input";

const Category = () => {
    return (
        <div>
            <p className="font-bold text-xl pb-3">Category</p>
            <div className="flex flex-col gap-2">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </div>
        </div>
    );
};

export default Category;
