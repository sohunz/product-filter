import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";

const Sidebar = () => {
    return (
        <div className="border w-[500px]">
            <div>
                <p className="font-extrabold lg:text-4xl md:4xl text-3xl py-5">
                    SHOES
                </p>
            </div>
            <Category />
            <Price />
            <Color />
        </div>
    );
};

export default Sidebar;
