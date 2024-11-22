import {Navbar} from "@/components/navbar";
import {About} from "@/components/about";
import {Sidebar} from "@/components/sidebar";
import {Footer} from "@/components/footer";


const AboutUsLayout = ({
                           children
                       }: {
    children: React.ReactNode;
}) => {
    const headings = [
        { id: 'whowe', title: 'Хто ми?' },
        { id: 'goal', title: 'Мета проєкту' },
        { id: 'whywe', title: 'Чому ми?' },
        { id: 'forsponsor', title: 'Чому для спонсорів важливо інвестувати в нас?' },
    ];
    return (
        <div className="h-min-full">
            <Navbar/>


            <div className="flex">
                <div className="hidden md:block h-screen mt-16 w-72 min-w-72 overflow-y-auto bg-white dark:bg-secondary pb-12 shadow-lg">
                    <div>
                        <About/>
                        <Sidebar headings={headings} />
                    </div>
                </div>
                <div className="h-screen w-full mt-16 overflow-y-auto p-4 shadow-lg">
                    <main>
                        {children}
                        <Footer/>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AboutUsLayout;