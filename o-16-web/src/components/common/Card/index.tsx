import Image from "next/image";
import React from "react";
import GradientText from "../GradientText";
import { IoMdStar } from "react-icons/io";
import { ICard } from "@/types";

function Card({
    image,
    title,
    pickDishes,
    totalDishes,
    price,
    className,
    chefDetails,
}: ICard) {
    return (
        <div
            className={`w-[350px] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,.1)] ${className}`}
        >
            <div className="h-[200px]">
                <Image
                    src={image}
                    className="h-full w-full object-cover"
                    width={300}
                    height={200}
                    alt={title}
                />
            </div>
            <div className="mt-2 flex flex-col gap-2 px-4 py-1">
                <h6 className="text-xl font-medium text-secondary">{title}</h6>
                <span className="font-light text-secondary">
                    Pick <GradientText>{pickDishes}</GradientText> out of{" "}
                    <GradientText>{totalDishes}</GradientText> dishes
                </span>
                <h3 className="text-2xl font-bold text-secondary">
                    QAR {price}
                </h3>
                <div className="flex items-center justify-between border-t py-2">
                    <div className="flex items-center gap-2">
                        <Image
                            src={chefDetails.profilePic}
                            className="h-[40px] w-[40px] rounded-full object-cover"
                            width={50}
                            height={50}
                            alt={chefDetails.name}
                        />
                        <span className="text-lg font-medium text-secondary">
                            {chefDetails.name}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoMdStar className="text-xl text-[#069de5]" />
                        <span className="text-xl font-semibold text-secondary">
                            4.5
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
