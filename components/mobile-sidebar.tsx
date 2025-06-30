import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import Sidebar from '@/components/sidebar';
// import { About } from "@/components/about";

export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger className="md:hidden pr-4">
				<Menu />
			</SheetTrigger>
			<SheetContent side="left" className="p-0 bg-secondary pt-10 w-80">
				{/* <About /> */}
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};
