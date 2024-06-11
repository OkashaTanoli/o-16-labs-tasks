import { Footer } from "@/components/common";
import { Browse, Hero, PopularDishes, Reviews } from "@/components/home";
import DownloadApp from "@/components/home/DownloadApp";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Hero />
            <DownloadApp />
            <PopularDishes />
            <Browse />
            <Reviews />
            <Footer />
        </>
    );
}
