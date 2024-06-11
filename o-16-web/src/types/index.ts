export interface ICard {
    image: string;
    title: string;
    pickDishes: number;
    totalDishes: number;
    price: number;
    chefDetails: {
        profilePic: string;
        name: string;
        rating: number;
    };
    className?: string;
}

export interface IReview {
    image: string;
    name: string;
    role: string;
    text: string;
    rating: number;
}
