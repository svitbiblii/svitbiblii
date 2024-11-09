import { BackButton } from "@/components/back-button";
const HowItWorksPage = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <BackButton />
            <h1 className="text-3xl font-bold mt-4">Як це працює</h1>
            <p className="text-lg mt-4 leading-relaxed text-gray-700">
            Тут має бути сторінка Як це працює, на якій буде розповідь як користуватися сайтом. 
            На мою думку сюди було б чудово теж додати слайди, на яких буде показано, 
            що користувач може зробити на сайті. Ці слайди потрібно малювати саме під 
            цей проєкт!
            </p>
        </div>
    );
}
export default HowItWorksPage;