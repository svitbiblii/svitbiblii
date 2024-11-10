import {Navbar} from "@/components/navbar";
import {About} from "@/components/about";
import {Sidebar} from "@/components/sidebar";
import {Footer} from "@/components/footer";
import {HorizontalMenu} from "@/app/(about-us)/components/horizontal-menu";



const AboutUsLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-min-full">
            <Navbar/>

                <div className="flex">
                    <div className="hidden md:block h-screen w-72 min-w-72 mt-16 overflow-y-auto bg-white pb-12 shadow-lg">
                        <div>
                            <About/>
                            <Sidebar/>
                        </div>
                    </div>
                    <div className="h-screen w-full mt-16 overflow-y-auto bg-white p-4 shadow-lg">
                        <main>
                            <HorizontalMenu/>
                            {children}
                            <Footer/>
                        </main>
                    </div>
                </div>
        </div>
    )
}

export default AboutUsLayout;