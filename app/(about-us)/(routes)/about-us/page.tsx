// pages/single-page.tsx
import Image from "next/image";

const AboutUsPage = () => {
    return (
        <div className="relative h-full w-full overflow-hidden px-4">
                <h1>«Світ Біблії» – «World of the Bible»</h1>
                <section id="whowe" className="scroll-mt-40">
                    <h2>Хто ми?</h2>
                    <p>Проєкт &quot;Світ Біблії&quot; реалізується Благодійним фондом «Медіаглагол» (<a href="http://mediaglagol.com.ua" target="_blank">http://mediaglagol.com.ua</a>) — некомерційною організацією, що існує з 2014 року й успішно підтримує християнсько-просвітницьку діяльність на волонтерських засадах.</p>
                    <p>Наш новий проєкт &quot;Світ Біблії&quot; - це масштабний онлайн ресурс, що надасть різним категоріям людей унікальну безплатну можливість для глибокого вивчення Біблії та християнської спадщини через інноваційну інтеграцію сучасних технологій та багатоформатних мультимовних та мультикультурних медіаресурсів.</p>
                    <p>Ми плануємо використовувати штучний інтелект для виявлення унікальних гіпертекстуальних звб&apos;язків між Біблією і текстами з художньої літератури, філософії, психології, історії та інших джерел зі статусом Public Domain, а також творами сучасних авторів, що погодилися на співпрацю з проєктом з метою показати, як різноманітні тексти, написані людьми, неодмінно тяжіють до єдиного центру біблійного одкровення.</p>
                    <p>Наш проєкт об&apos;єднає відео-, аудіо- та комунікаційні платформи, що допоможуть користувачам засвоювати біблійні наративи, а також запропонує унікальні маршрути для кожного користувача, створені через ШІ програму гіда.</p>
                </section>
                <section id="goal" className="scroll-mt-40">
                    <h2>Мета проєкту</h2>
                    <p>Наша мета - створення умов для вільного повернення членів постхристиянського суспільства до
                        християнських духовних цінностей. У секулярному світі, де свобода вибору стала основою
                        цивілізації, ми бачимо живу необхідність втілення біблійних істин, яка в минулому була
                        основою моральних цінностей.</p>
                    <p>Сумний досвід історії ХХ-початку ХХI столітть, з багатомільйонними жертвами терору та
                        світових війн переконує: без вільного та глибокого повернення до християнських засад у
                        суспільствах світу неодмінно виникає моральна дезорієнтація, яка призводить до деградації,
                        розгулу війн, насилля та корупції. Тому своєю працею ми закликаємо до оновленого
                        усвідомленого погляду на Біблію.</p>

                    <Image
                        className="fit-picture mx-auto block"
                        src="/images/image-about-page.png"
                        width={600}
                        height={400}
                        alt="image-about-page"/>

                </section>
                <section id="whywe" className="scroll-mt-40">
                    <h2>Чому ми?</h2>
                    <p>&quot;Світ Біблії&quot; — це інноваційний проєкт, який в унікальний спосіб поєднує сучасні технології
                        та біблійні дослідження. Ми створюємо нові можливості для всіх, хто хоче глибше пізнати
                        духовні істини через взаємодію з різноманітними медіаресурсами та комунікаційними
                        платформами. Завдяки штучному інтелекту та персоналізованим маршрутам дослідження, кожен
                        користувач може знайти свій унікальний духовний шлях в рамках нашого проєкту. Робота з
                        ресурсом відбувається в привабливій формі мандрівки між різноманітними текстами, відео та
                        аудіо-джерелами та осередками спілкування за допомогою ШІ гіда, який враховує індивідуальні
                        уподобання користувача.</p>


                </section>
                <section id="forsponsor" className="">
                    <h2>Чому для спонсорів важливо інвестувати в нас?</h2>
                    <p>Інвестиції в &quot;Світ Біблії&quot; підтримують важливу культурно-освітницьку ініціативу, що змінює
                        світ на краще через подолання розділень між різними християнськими спільнотами та різними
                        культурними осередками, відображаючи глибокі звб&apos;язки між світською та релігійною
                        культурами.</p>
                    <p>Спонсори отримують:</p>
                    <ul>
                        <li>Видимість серед цільових груп проєкту (подяки всім спонсорам будуть на сайті без
                            вказівки суми внеска).
                        </li>
                        <li>Можливість участі у створенні контенту та організації культурно-просвітницьких
                            заходів.
                        </li>
                        <li>Співпрацю з дослідниками, письменниками та лідерами християнських груп для популяризації
                            біблійних цінностей.
                        </li>
                    </ul>
                    <p>Ваш внесок в наш проект допоможе оздоровити суспільство та зцілити токсичні патерни його
                        існування через розповсюдження якісних християнських цінностей серед людей у сучасному
                        світі. Інвестувати в нас - це можливість бути частиною глобальної ініціативи, яка прагне
                        привести людей до глибшого усвідомлення та засвоєння духовних істин.</p>
                </section>
        </div>
    );
}

export default AboutUsPage;
