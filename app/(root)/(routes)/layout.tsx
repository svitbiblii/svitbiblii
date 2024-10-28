import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <Navbar />

            <div className="relative flex h-full w-full overflow-hidden ">
                <div className="flex-shrink-0 overflow-x-hidden mt-16" style={{width: '256px'}}>
                    <Sidebar/>
                </div>
                <main className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default RootLayout;