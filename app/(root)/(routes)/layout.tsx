import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Sidebar } from "@/components/sidebar";
import { Search } from "@/components/search";
import { Categories } from "@/components/categories";
import { SourcesOfInformation } from "@/components/sources-of-information";
import { CreateRoute } from "@/components/create-route";


const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
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
                    <Categories/>
                    <SourcesOfInformation/>
                    <CreateRoute/>
                </main>
            </div>
        </div>
    );
}

export default RootLayout;