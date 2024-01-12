import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
    return (
        <div className="border p-5 rounded-lg">
            <div>
                <div>
                    <img
                        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
                        className="object-cover w-[80%] mx-auto"
                    />
                </div>
                <p className="font-bold pt-5 text-xl">Shoes</p>
                <div className="flex gap-2 py-2">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                </div>
            </div>
            <div className="flex justify-between pt-3">
                <p>$1500</p>
                <BsFillBagHeartFill />
            </div>
        </div>
    );
};

export default Card;
