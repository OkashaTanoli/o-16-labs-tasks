"use client";

import GradientText from "@/components/common/GradientText";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // navigation module
import "swiper/css/grid";
import { Autoplay, FreeMode, Grid, Navigation } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import { ReviewCard } from "@/components/common";

function Reviews() {
    let data = [
        {
            image: "/assets/girl-profile.jpg",
            name: "William Smith",
            role: "Customer",
            text: "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
            rating: 4.7,
        },
        {
            image: "/assets/girl-profile.jpg",
            name: "William Smith",
            role: "Customer",
            text: "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
            rating: 4.7,
        },
        {
            image: "/assets/girl-profile.jpg",
            name: "William Smith",
            role: "Customer",
            text: "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
            rating: 4.7,
        },
        {
            image: "/assets/girl-profile.jpg",
            name: "William Smith",
            role: "Customer",
            text: "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
            rating: 4.7,
        },
    ];
    return (
        <div className="py-20">
            <LayoutWrapper>
                <div>
                    <h2 className="text-5xl font-bold leading-tight text-secondary">
                        What our
                        <br />
                        <GradientText> Customers </GradientText>
                        says
                    </h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-1/2 z-50 hidden w-full -translate-x-1/2 -translate-y-1/2 justify-between sm:flex">
                            <div className="swiper-navigation-prev flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-custom-gradient">
                                <IoIosArrowBack className="text-3xl text-white" />
                            </div>
                            <div className="swiper-navigation-next flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-custom-gradient">
                                <IoIosArrowForward className="text-3xl text-white" />
                            </div>
                        </div>
                        <div className="mx-auto sm:w-[90%]">
                            <Swiper
                                slidesPerView={3} // Display 3 slides per view
                                navigation={{
                                    nextEl: ".swiper-navigation-next",
                                    prevEl: ".swiper-navigation-prev",
                                }}
                                spaceBetween={10}
                                freeMode={true}
                                speed={1000}
                                modules={[Navigation]}
                                className="mySwiper"
                                loop
                            >
                                {data.map((item, i) => {
                                    return (
                                        <SwiperSlide
                                            key={i}
                                            className="px-7 py-20"
                                        >
                                            <ReviewCard
                                                image={item.image}
                                                name={item.name}
                                                rating={item.rating}
                                                role={item.role}
                                                text={item.text}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default Reviews;
