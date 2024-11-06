// pages/about.tsx
import { BackButton } from "@/components/back-button";
import Carousel from "@/components/carousel";

const slides = [
    { image: "/images/slide1.jpeg", text: "Slide 1 Description" },
    { image: "/images/slide2.jpeg", text: "Slide 2 Description" },
    { image: "/images/slide3.jpeg", text: "Slide 3 Description" },
];

const AboutUsPage = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <BackButton />
            <h1 className="text-3xl font-bold mt-4">Про нас</h1>
            <p className="text-lg mt-4 leading-relaxed text-gray-700">
                На цій сторінці має бути красивий текст, в якому розповідається про те, хто ми, і, мабудь, про мету створення проєкту.
                Але гарний текст на цю тему я не написала, тому зараз ви бачите саме цей текст, метою якого є заповнення вільного простору.
                Окрім гарно написаного тексту, ця сторінка ще має бути гарно оформлена, що теж поки що не зроблено. Якось так
            </p>
            <div className="mt-8">
                <Carousel slides={slides} />
            </div>
        </div>
    );
}

export default AboutUsPage;
