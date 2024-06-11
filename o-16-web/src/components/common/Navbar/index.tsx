import Image from "next/image";
import React from "react";
import LayoutWrapper from "../LayoutWrapper";
import { HiOutlineUser } from "react-icons/hi2";

function Navbar() {
    return (
        <LayoutWrapper>
            <div className="flex items-start justify-between py-3">
                <Image
                    src={"/assets/logo.svg"}
                    width={150}
                    height={150}
                    className="w-[70px]"
                    alt="Logo"
                />
                <ul className="flex gap-10 pt-6 font-medium text-black/35">
                    <li className="flex flex-col items-center gap-2 text-secondary">
                        Home
                        <span className="h-1 w-9 rounded-full bg-custom-gradient"></span>
                    </li>
                    <li>How it Works</li>
                    <li>Our Chefs</li>
                    <li>Book</li>
                </ul>
                <div className="flex items-center gap-2 pt-6 text-secondary/50">
                    <HiOutlineUser size={25} />
                    <div className="flex items-center gap-3">
                        <span>Sign Up</span>
                        <span className="h-4 w-[0.8px] bg-secondary/50"></span>
                        <span>Log In</span>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
}

export default Navbar;
