import {OnboardingSlider} from "@/app/(onboarding)/components/onboarding-slider";

const OnboardingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="">
            <OnboardingSlider/>
            {children}
        </div>
    )
}
export default OnboardingLayout;