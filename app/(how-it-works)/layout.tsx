import {Navbar} from "@/components/navbar";
import {About} from "@/components/about";
import {Sidebar} from "@/components/sidebar";

const HowItWorksLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-min-full">
            <Navbar/>

                <div className="flex">
                    <div className="hidden md:block h-screen mt-16 w-72 min-w-72 overflow-y-auto bg-white dark:bg-secondary pb-12 shadow-lg">
                        <div>
                            <About/>
                            <Sidebar/>
                        </div>
                    </div>
                    <div className="h-screen w-full mt-16 overflow-y-auto p-4 shadow-lg">
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
        </div>
    )
}

export default HowItWorksLayout;