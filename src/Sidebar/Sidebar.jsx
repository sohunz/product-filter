import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";

const Sidebar = () => {
    return (
        <div className="border-r w-[250px] flex flex-col items-start mb-10 pb-1 pl-5">
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
