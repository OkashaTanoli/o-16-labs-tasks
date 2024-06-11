import React from "react";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import GradientText from "../GradientText";
import { FaLocationDot, FaTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
});

function Footer() {
    return (
        <div className="bg-secondary">
            <LayoutWrapper>
                <div className="grid grid-cols-4 gap-5 py-14">
                    <div className="flex items-center">
                        <Image
                            src={"/assets/logo.svg"}
                            className="w-[200px]"
                            width={250}
                            height={250}
                            alt="icon"
                        />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">
                            <GradientText>Address</GradientText>
                        </h4>
                        <div
                            className={`mt-8 flex flex-col gap-7 text-sm text-white ${poppins.className}`}
                        >
                            <span className="flex gap-2">
                                <FaLocationDot className="mt-1 text-lg" />
                                Park Avenue South, New York, 74812, United
                                States
                            </span>
                            <span className="flex gap-2">
                                <MdMail className="mt-1 text-lg" />
                                contact@016labs.com
                            </span>
                            <span className="flex gap-2">
                                <IoCall className="mt-1 text-lg" />
                                000-123-456
                            </span>
                            <div className="flex gap-7">
                                <span>FAQ&apos;s</span>
                                <span>Contact Us</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">
                            <GradientText>Links</GradientText>
                        </h4>
                        <ul
                            className={`mt-8 flex flex-col gap-7 text-sm text-white ${poppins.className}`}
                        >
                            <li>Home</li>
                            <li>How it works</li>
                            <li>Our Chefs</li>
                            <li>Reviews</li>
                            <li>What&apos;s new</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">
                            <GradientText>Subcribe to Newsletter</GradientText>
                        </h4>
                        <div>
                            <div className="mt-5 flex gap-2">
                                <input
                                    type="text"
                                    className="rounded-lg bg-white px-5 py-3 text-sm font-semibold placeholder:text-secondary"
                                    placeholder="Email Address"
                                />
                                <button className="rounded-md bg-custom-gradient px-[10px] text-white">
                                    <RiSendPlaneFill className="text-2xl" />
                                </button>
                            </div>
                            <div className="mt-14">
                                <h4 className="text-2xl font-semibold text-white">
                                    Our Social
                                </h4>
                                <div className="mt-4 flex items-center gap-5">
                                    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#069de5]">
                                        <TiSocialFacebook className="text-2xl text-secondary" />
                                    </span>
                                    <FaTwitter className="text-3xl text-[#069de5]" />
                                    <AiFillInstagram className="text-3xl text-[#069de5]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10 pb-10">
                    <span className="h-[1px] flex-grow bg-white/50"></span>
                    <span className="text-sm text-white">
                        Copyrights © 2022 O16 Labs - All Rights Reserved
                    </span>
                    <span className="h-[1px] flex-grow bg-white/50"></span>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Footer;