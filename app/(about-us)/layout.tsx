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
    <div>
        <Navbar/>

        <div className="relative flex h-full w-full overflow-hidden ">
            <div className="hidden md:flex flex-col flex-shrink-0 overflow-x-hidden mt-16" style={{width: '256px'}}>
                <About/>
                <Sidebar/>
            </div>
            <main className="relative flex  max-w-full flex-1 flex-col overflow-hidden mt-16 ">
                <HorizontalMenu/>
                {children}
                <Footer/>
            </main>
        </div>
    </div>
)
}

export default AboutUsLayout;