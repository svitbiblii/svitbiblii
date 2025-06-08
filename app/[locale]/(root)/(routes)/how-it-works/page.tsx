import { useTranslations } from "next-intl";

const HowItWorksPage = () => {
    const t = useTranslations("HowItWorks");

    return (
        <div className="h-min-full flex mt-16">
        <div className="p-8 max-w-3xl mx-auto min-h-screen">
            <h1 className="text-3xl font-bold mt-4">{t('title')}</h1>
            <p className="text-lg mt-4 leading-relaxed text-gray-700">
            {t('content')}
            </p>
        </div>
    </div>
    );
}
export default HowItWorksPage;