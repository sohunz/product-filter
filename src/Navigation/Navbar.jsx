import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navbar = ({ handleInputChange, query }) => {
    return (
        <div className=" w-full">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center py-5">
                <div className="w-full flex gap-5  items-center">
                    <input
                        type="text"
                        placeholder="Search shoes"
                        className="outline-none rounded-md pl-3 p-2 lg:w-[50%] md:w-[90%] sm:w-[90%] w-[90%] border text-gray-700 focus:outline-none focus:border-orange-500"
                        onChange={handleInputChange}
                        value={query}
                    />
                </div>
                <div className="flex lg:gap-10 md:gap-10 sm:gap-6 gap-5 ">
                    <FiHeart size={25} className="text-orange-500" />
                    <AiOutlineShoppingCart
                        size={25}
                        className="text-orange-500"
                    />
                    <AiOutlineUserAdd size={25} className="text-orange-500" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
