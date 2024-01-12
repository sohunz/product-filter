/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
    return (
        <>
            <div className="border p-5 rounded-lg">
                <div>
                    <div className="w-full flex justify-center items-center mb-5">
                        <img
                            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
                            className="max-h-[100px]"
                        />
                    </div>
                    <p className="font-bold pt-5 text-lg">Shoes</p>
                    <div className="flex gap-2 py-2 items-center">
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <p>123</p>
                    </div>
                    <div className="flex justify-between pt-3">
                        <p>$1500</p>
                        <BsFillBagHeartFill />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
