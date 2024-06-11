import LayoutWrapper from "@/components/common/LayoutWrapper";
import Image from "next/image";
import React from "react";

function DownloadApp() {
    return (
        <div className="mt-24 w-full">
            <LayoutWrapper>
                <div className="relative w-full">
                    <Image
                        src={"/assets/download-app-bg.png"}
                        className="absolute top-1/2 w-full -translate-y-1/2"
                        width={1500}
                        height={1500}
                        alt="bg"
                    />
                    <Image
                        src={"/assets/pizza.png"}
                        className="absolute -top-5 right-20"
                        width={200}
                        height={200}
                        alt="bg"
                    />
                    <Image
                        src={"/assets/ice-cream.png"}
                        className="absolute -right-6 bottom-5"
                        width={150}
                        height={150}
                        alt="bg"
                    />
                    <div className="relative z-30 ml-28 flex items-center gap-10 pt-14">
                        <Image
                            src={"/assets/mobile.png"}
                            className="w-[250px]"
                            width={500}
                            height={600}
                            alt="mobile"
                        />
                        <div>
                            <h2 className="text-5xl font-bold text-white">
                                Download our Mobile App
                            </h2>
                            <div className="mt-12 flex items-center gap-10">
                                <Image
                                    src={"/assets/google-store.png"}
                                    className="w-[250px]"
                                    width={300}
                                    height={200}
                                    alt="google"
                                />
                                <Image
                                    src={"/assets/apple-store.png"}
                                    className="w-[250px]"
                                    width={300}
                                    height={200}
                                    alt="apple"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default DownloadApp;
