import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";

const Sidebar = ({ handleChange }) => {
    // console.log(handleChange);

    return (
        <div className="border-r w-[250px] min-w-[250px] h-sreen flex flex-col items-start mb-10 pb-1 pl-5">
            <div>
                <p className="font-bold text-orange-500 lg:text-4xl md:4xl text-3xl py-5">
                    SHOES
                </p>
            </div>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Color handleChange={handleChange} />
        </div>
    );
};

export default Sidebar;
