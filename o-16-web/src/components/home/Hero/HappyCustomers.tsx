import GradientText from "@/components/common/GradientText";
import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";

function HappyCustomers() {
    let customerImages = [
        "/assets/girl-profile.jpg",
        "/assets/girl-profile.jpg",
        "/assets/girl-profile.jpg",
        "/assets/girl-profile.jpg",
    ];
    return (
        <div className="flex items-center gap-4">
            <div className="ml-3 flex">
                {customerImages.map((image, i) => {
                    return (
                        <div
                            key={i}
                            className="-ml-3 h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-white"
                        >
                            <Image
                                src={image}
                                className="h-full w-full object-cover"
                                width={80}
                                height={80}
                                alt="profile"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col">
                <h3 className="bg-custom- bg-clip-text text-lg font-bold">
                    <GradientText>Our happy customers</GradientText>
                </h3>
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-lg font-bold text-secondary">
                        <IoMdStar className="text-2xl text-[#FFC75F]" />
                        4.5
                    </span>
                    <span className="font-medium text-secondary/50">
                        (8.2K Review)
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HappyCustomers;
