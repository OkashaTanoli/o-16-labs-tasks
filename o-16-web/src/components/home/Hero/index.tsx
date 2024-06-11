import GradientText from "@/components/common/GradientText";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import React from "react";
import ScheduleForm from "./ScheduleForm";
import Image from "next/image";
import HappyCustomers from "./HappyCustomers";

function Hero() {
    return (
        <div className="pt-14">
            <LayoutWrapper>
                <div className="flex items-start justify-between">
                    <div className="w-1/2">
                        <h1 className="text-[72px] font-semibold leading-none">
                            Book
                            <GradientText> O16 Labs</GradientText>
                            <br />
                            for Your
                            <br />
                            Dinner
                            <GradientText> Party</GradientText>
                        </h1>
                        <p className="mt-5 w-[70%] text-lg leading-relaxed tracking-wider text-secondary/50">
                            We&apos;re providing the best Chef booking platform.
                            Choose a menu and book your Chef instantly
                        </p>
                        <ScheduleForm />
                        <div className="mt-10 flex w-[80%] items-center justify-between">
                            <HappyCustomers />
                            <div className="flex flex-col gap-3">
                                <span className="font-semibold italic text-secondary/50">
                                    We accept
                                </span>
                                <Image
                                    src={"/assets/visa-master.png"}
                                    className="w-[90px]"
                                    width={100}
                                    height={100}
                                    alt="visa"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image
                            src={"/assets/hero.png"}
                            className="w-full"
                            width={700}
                            height={700}
                            alt="hero"
                        />
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Hero;
