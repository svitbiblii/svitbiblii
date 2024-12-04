import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";

const Homepage = () => {
    return (
      <div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
        <Search/>
        <CreateRoute/>
      </div>
    );
  }
  
export default Homepage;