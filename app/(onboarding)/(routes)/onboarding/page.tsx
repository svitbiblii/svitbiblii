export default function OnboardingPage() {
    return (
        <div className="pb-12 hidden lg:block">
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


        </div>
    );
}