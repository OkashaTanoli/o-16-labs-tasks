import { Button } from "@/components/common";
import Card from "@/components/common/Card";
import GradientText from "@/components/common/GradientText";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { ICard } from "@/types";
import React from "react";

function PopularDishes() {
    let data: ICard[] = [
        {
            image: "/assets/dish1.png",
            title: "Menu Title Here",
            pickDishes: 5,
            totalDishes: 10,
            price: 200,
            chefDetails: {
                profilePic: "/assets/girl-profile.jpg",
                name: "Marriot Head Chef",
                rating: 4.5,
            },
        },
        {
            image: "/assets/dish2.png",
            title: "Menu Title Here",
            pickDishes: 5,
            totalDishes: 10,
            price: 200,
            chefDetails: {
                profilePic: "/assets/girl-profile.jpg",
                name: "Marriot Head Chef",
                rating: 4.5,
            },
        },
        {
            image: "/assets/dish3.png",
            title: "Menu Title Here",
            pickDishes: 5,
            totalDishes: 10,
            price: 200,
            chefDetails: {
                profilePic: "/assets/girl-profile.jpg",
                name: "Marriot Head Chef",
                rating: 4.5,
            },
        },
    ];
    return (
        <div className="relative mt-20 overflow-hidden py-14">
            <LayoutWrapper>
                <div className="flex">
                    <div className="w-[450px] shrink-0 py-10">
                        <h2 className="text-6xl font-bold leading-tight">
                            Our Most
                            <GradientText> Popular Dishes </GradientText>
                            This Month
                        </h2>
                        <Button className="mt-5">See all</Button>
                    </div>
                    <div className="flex gap-10">
                        <div className="absolute right-0 h-full w-[350px] bg-gradient-to-r from-transparent to-white"></div>
                        {data.map((item, i) => (
                            <Card
                                key={i}
                                image={item.image}
                                title={item.title}
                                pickDishes={item.pickDishes}
                                totalDishes={item.totalDishes}
                                price={item.price}
                                chefDetails={{
                                    name: item.chefDetails.name,
                                    profilePic: item.chefDetails.profilePic,
                                    rating: item.chefDetails.rating,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </LayoutWrapper>
        </div>
    );
}

export default PopularDishes;
