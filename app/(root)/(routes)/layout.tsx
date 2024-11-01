import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Sidebar } from "@/components/sidebar";
import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";
import { Footer } from "@/components/footer";


const RootLayout = () => {
    return ( 
        <div className="h-min-full">
            <Navbar />

            <div className="relative flex h-full w-full overflow-hidden ">
                <div className="flex-shrink-0 overflow-x-hidden mt-16" style={{width: '256px'}}>
                    <About/>
                    <Sidebar/>
                </div>
                <main className="relative flex  max-w-full flex-1 flex-col overflow-hidden mt-16 px-12">
                    <Search/>
                    <CreateRoute/>
                    <Footer/>
                </main>
            </div>
        </div>
    );
}

export default RootLayout;