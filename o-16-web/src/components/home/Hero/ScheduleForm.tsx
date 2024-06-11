import Image from "next/image";
import React from "react";
import {
    IoIosArrowDown,
    IoIosArrowForward,
    IoIosArrowUp,
} from "react-icons/io";

function ScheduleForm() {
    return (
        <div className="mt-7 flex items-center gap-4">
            <div className="grid w-full grid-cols-3 divide-x rounded-2xl py-4 shadow-[0_5px_20px_rgba(0,0,0,.08)]">
                <div className="flex items-start justify-center gap-3 py-2">
                    <Image
                        src={"/assets/icons/region.svg"}
                        width={20}
                        height={20}
                        className="mt-1"
                        alt="Region"
                    />
                    <div className="flex flex-col gap-4 text-secondary">
                        <span className="flex items-center gap-3 font-bold 2xl:text-lg">
                            Select region
                            <IoIosArrowDown className="text-[#069de5]" />
                        </span>
                        <span className="text-sm text-secondary/50 2xl:text-base">
                            Al Shamal <span className="ml-3">الشمال</span>
                        </span>
                    </div>
                </div>
                <div className="flex items-start justify-center gap-3 py-2">
                    <Image
                        src={"/assets/icons/calender.svg"}
                        width={20}
                        height={20}
                        className="mt-1 !w-[17px]"
                        alt="Region"
                    />
                    <div className="flex flex-col gap-4 text-secondary">
                        <span className="flex items-center gap-3 text-base font-bold 2xl:text-lg">
                            Select date
                            <IoIosArrowDown className="text-[#069de5]" />
                        </span>
                        <span className="text-sm text-secondary/50 2xl:text-base">
                            15 Jan - 20 Jan 2022
                        </span>
                    </div>
                </div>
                <div className="flex items-start justify-center gap-3 py-2">
                    <Image
                        src={"/assets/icons/persons.svg"}
                        width={20}
                        height={20}
                        className="w-[23px]"
                        alt="Region"
                    />
                    <div className="flex flex-col gap-4 text-secondary">
                        <span className="flex items-center gap-3 text-base font-bold 2xl:text-lg">
                            Select Region
                            <IoIosArrowDown className="text-[#069de5]" />
                        </span>
                        <div className="flex items-center gap-4">
                            <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#e6f5fc]">
                                <IoIosArrowDown className="text-[#069de5]" />
                            </span>
                            <span className="text-sm text-secondary/50 2xl:text-base">
                                5
                            </span>
                            <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#e6f5fc]">
                                <IoIosArrowUp className="text-[#069de5]" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-custom-gradient shadow-[0_20px_20px_rgba(254,175,84,.25)]">
                <IoIosArrowForward className="text-4xl text-white" />
            </div>
        </div>
    );
}

export default ScheduleForm;
