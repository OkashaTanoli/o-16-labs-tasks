import GradientText from "@/components/common/GradientText";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import Image from "next/image";
import React from "react";

function Browse() {
    return (
        <div className="mt-14 bg-[#F8F8F8] py-20">
            <LayoutWrapper>
                <div>
                    <h2 className="flex items-center gap-6 text-5xl font-bold leading-normal text-secondary">
                        <span className="h-1 w-[30px] bg-secondary"></span>
                        Browse by
                        <GradientText>Category</GradientText>
                    </h2>
                    <div className="mt-10 grid grid-cols-4 gap-12">
                        <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
                            <Image
                                src={"/assets/category1.png"}
                                className="h-full w-full object-cover"
                                width={800}
                                height={800}
                                alt="category1"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent">
                                <h3 className="py-6 text-4xl font-medium text-white">
                                    Explore Food
                                </h3>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={"/assets/category2.png"}
                                className="h-full w-full object-cover"
                                width={800}
                                height={800}
                                alt="category1"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent">
                                <h3 className="py-6 text-2xl font-medium text-white">
                                    Master Chefs
                                </h3>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={"/assets/category3.png"}
                                className="h-full w-full object-cover"
                                width={800}
                                height={800}
                                alt="category1"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent">
                                <h3 className="py-6 text-2xl font-medium text-white">
                                    Desserts
                                </h3>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={"/assets/category4.png"}
                                className="h-full w-full object-cover"
                                width={800}
                                height={800}
                                alt="category1"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent">
                                <h3 className="py-6 text-2xl font-medium text-white">
                                    Events
                                </h3>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={"/assets/category5.png"}
                                className="h-full w-full object-cover"
                                width={800}
                                height={800}
                                alt="category1"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent">
                                <h3 className="py-6 text-2xl font-medium text-white">
                                    Birthdays
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Browse;
