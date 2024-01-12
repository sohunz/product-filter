import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className=" w-full mx-auto">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center py-5">
                <div className="flex gap-5 sm:gap-6 md:gap-10 lg:gap-10 items-center">
                    <input
                        type="text"
                        placeholder="Search shoes"
                        className="border outline-none rounded-md pl-3 p-2 lg:w-[300px] md:w-[300px] sm:w-[300px] w-[150px]"
                    />
                </div>
                <div className="flex lg:gap-10 md:gap-10 sm:gap-6 gap-5 ">
                    <FiHeart size={23} />
                    <AiOutlineShoppingCart size={23} />
                    <AiOutlineUserAdd size={23} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
