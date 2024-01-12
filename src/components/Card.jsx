/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, reviews, newPrice }) => {
    return (
        <>
            <div className="border p-5 rounded-lg">
                <div>
                    <div className="w-full flex justify-center items-center mb-5">
                        <img src={img} className="max-h-[100px]" />
                    </div>
                    <p className="font-bold pt-5 text-lg">{title}</p>
                    <div className="flex gap-2 py-2 items-center">
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <p>{reviews}</p>
                    </div>
                    <div className="flex justify-between pt-3">
                        <p>${newPrice}</p>
                        <BsFillBagHeartFill />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
