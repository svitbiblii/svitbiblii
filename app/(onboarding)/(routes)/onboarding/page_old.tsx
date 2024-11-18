//import Carousel from "@/components/carousel";
//import Image from "next/image";

// const slides = [
//     {
//         image: (
//             <Image 
//                 src="/images/slide1.jpeg" 
//                 alt="Search function illustration" 
//                 width={800} 
//                 height={400} 
//                 layout="responsive" 
//             />
//         ),
//         text: "Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи.",
//         prev: "Пошук...",
//         ico: (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                 <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
//             </svg>
//         ),
//         doubleBtn: (
//             <div className="flex">
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Login</button>
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Start</button>
//             </div>
//         )
//     },
//     {
//         image: (
//             <Image 
//                 src="/images/slide2.jpeg" 
//                 alt="Reading articles and expanding knowledge" 
//                 width={800} 
//                 height={400} 
//                 layout="responsive" 
//             />
//         ),
//         text: "Читаете статьи, разбирайтесь в текстах и контексте, расширяйте своё знание.",
//         prev: "Новий заповіт...",
//         ico: (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                 <path d="M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
//             </svg>
//         ),
//         doubleBtn: (
//             <div className="flex">
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Login</button>
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Start</button>
//             </div>
//         )
//     },    
//     {
//         image: (
//             <Image 
//                 src="/images/slide3.jpeg" 
//                 alt="Saving favorite materials" 
//                 width={800} 
//                 height={400} 
//                 layout="responsive" 
//             />
//         ),
//         text: "Сохраняйте любимые материалы, чтобы вернуться к ним позже.",
//         prev: "Зберегти",
//         ico: (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                 <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
//             </svg>
//         ),
//         doubleBtn: (
//             <div className="flex">
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Login</button>
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Start</button>
//             </div>
//         )
//     },    
//     {
//         image: (
//             <Image 
//                 src="/images/slide2.jpeg" 
//                 alt="Discuss and share with other users" 
//                 width={800} 
//                 height={400} 
//                 layout="responsive" 
//             />
//         ),
//         text: "Обсуждайте, делитесь мнениями и учитесь вместе с другими пользователями.",
//         prev: "Поділитись",
//         ico: (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                 <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
//             </svg>
//         ),
//         doubleBtn: (
//             <div className="flex">
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Login</button>
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Start</button>
//             </div>
//         )
//     },    
//     {
//         image: (
//             <Image 
//                 src="/images/slide1.jpeg" 
//                 alt="Listen to Bible texts in audio format, anytime, anywhere" 
//                 width={800} 
//                 height={400} 
//                 layout="responsive" 
//             />
//         ),
//         text: "Слухайте біблійні тексти в аудіо форматі. Будь де. Будь коли",
//         prev: "Аудио",
//         ico: (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                 <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" />
//             </svg>
//         ),
//         doubleBtn: (
//             <div className="flex">
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Login</button>
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Start</button>
//             </div>
//         )
//     },    
//     {
//         image: (
//             <Image 
//                 src="/images/slide3.jpeg" 
//                 alt="Watch thematic videos and lectures" 
//                 width={800} 
//                 height={400} 
//                 layout="responsive" 
//             />
//         ),
//         text: "Дивіться тематичні відео, та лекціі.",
//         prev: "Відео",
//         ico: (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                 <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
//             </svg>
//         ),
//         doubleBtn: (
//             <div className="flex">
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Login</button>
//                 <button className="bg-white rounded-3xl p-3 w-1/2 mx-1">Start</button>
//             </div>
//         )
//     },    
// ];


export default function OnboardingPage() {
    return (
        <div className="pb-12">
            <style>
                {`
                html {
                          overflow: auto !important;
                }
              `}
            </style>
            <h1 className="hidden lg:block text-4xl font-extrabold py-10 mt-10 text-center uppercase">
                Світ Біблії — ваш гід у світі духовного пізнання.
            </h1>

            <section className="hidden lg:block max-w-2xl mx-auto px-4 text-center">
                <p className="mb-10">
                    Здесь вы найдете множество материалов, которые помогут вам глубже изучить библейские тексты.
                </p>
                <a
                    href="/"
                    className="max-w-64 mx-auto block bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-blue-700 transition duration-300 mb-8"
                >
                    Почнемо
                </a>
            </section>

            {/* <section className="max-w-full lg:max-w-4xl mx-auto lg:mt-14 lg:mb-4">
                <Carousel slides={slides} />
            </section> */}

            <section className="max-w-full lg:max-w-4xl mx-auto lg:mt-14 lg:mb-10">
                <div className="relative w-full">
                    <div className="flex h-screen w-full lg:h-h-122 items-center justify-between lg:-ml-6">
                        <div className="slide">
                            <img
                                className="absolute h-full w-full left-0 top:0 right-0 bottom-0 text-transparent object-cover lg:rounded-2xl"
                                alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                                fetchPriority="high" decoding="async" data-nimg="fill"
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75"/>
                            <div
                                className="absolute z-20 max-w-full  text-4xl lg:text-xl top-24 lg:top-0 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">Используйте
                                строку поиска, чтобы найти интересующие вас темы или библейские стихи.
                            </div>
                            <div
                                className="hidden lg:block absolute rounded-3xl z-20 w-5/6 max-w-full text-l text-center bottom-5 bg-white left-5 p-2 text-black font-bold uppercase">Пошук...<span
                                className="inline-block w-5 ml-3.5 relative top-0.5"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></span>
                            </div>
                        </div>
                        <div className="slide">
                            <img
                                className="absolute h-full w-full left-0 top:0 right-0 bottom-0 text-transparent object-cover lg:rounded-2xl"
                                alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                                fetchPriority="high" decoding="async" data-nimg="fill"
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75"/>
                            <div
                                className="absolute z-20 max-w-full  text-4xl lg:text-xl top-24 lg:top-0 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">Читаете
                                статьи, разбирайтесь в текстах и контексте, расширяйте своё знание.
                            </div>
                            <div
                                className="hidden lg:block absolute rounded-3xl z-20 w-5/6 max-w-full text-l text-center bottom-5 bg-white left-5 p-2 text-black font-bold uppercase">Новий
                                заповіт...<span className="inline-block w-5 ml-3.5 relative top-0.5"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                                    d="M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></span>
                            </div>
                        </div>
                        <div className="slide">
                            <img
                                className="absolute h-full w-full left-0 top:0 right-0 bottom-0 text-transparent object-cover lg:rounded-2xl"
                                alt="Используйте строку поиска, чтобы найти интересующие вас темы или библейские стихи."
                                fetchPriority="high" decoding="async" data-nimg="fill"
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2Fimages%2Fslide1.jpeg&amp;w=3840&amp;q=75"/>

                            <div
                                className="absolute z-20 max-w-full  text-4xl lg:text-xl top-24 lg:top-0 left-0 pt-6 pl-6 pr-10 text-white font-bold uppercase">Сохраняйте
                                любимые материалы, чтобы вернуться к ним позже.
                            </div>
                            <div
                                className="hidden lg:block absolute rounded-3xl z-20 w-5/6 max-w-full text-l text-center bottom-5 bg-white left-5 p-2 text-black font-bold uppercase">Зберегти<span
                                className="inline-block w-5 ml-3.5 relative top-0.5"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}