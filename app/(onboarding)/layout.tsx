import {OnboardingSlider} from "@/app/(onboarding)/components/onboarding-slider";

const OnboardingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">

            {children}
            <OnboardingSlider/>
        </div>
    )
}
export default OnboardingLayout;