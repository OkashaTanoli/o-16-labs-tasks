import { IReview } from "@/types";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800", "900"],
});

function ReviewCard({ name, rating, image, role, text }: IReview) {
    return (
        <div className="rounded-2xl p-5 shadow-[0_20px_30px_rgba(0,0,0,.1)]">
            <div className="flex items-center gap-3">
                <Image
                    src={image}
                    className="h-[80px] w-[80px] rounded-full object-cover"
                    width={100}
                    height={100}
                    alt={name}
                />
                <div>
                    <h4 className="text-2xl text-secondary">{name}</h4>
                    <span className="text-secondary/50">{role}</span>
                </div>
            </div>
            <p className={`mt-5 text-lg leading-relaxed ${poppins.className}`}>
                {text}
            </p>
            <div className="mt-7 flex items-center justify-end gap-2 text-lg font-bold text-secondary">
                <IoMdStar className="text-2xl text-[#FFC75F]" />
                4.5
            </div>
        </div>
    );
}

export default ReviewCard;
