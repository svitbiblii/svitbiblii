import { Search } from "@/components/search";
import { CreateRoute } from "@/components/create-route";
// import { useTranslations } from "next-intl";

const Homepage = () => {
  // const t = useTranslations("Homepage")
    return (
      <div className="relative h-full w-full overflow-hidden px-4 min-h-screen">
        {/* <h1>{t('title')}</h1> */}
        <Search/>
        <CreateRoute/>
      </div>
    );
  }
  
export default Homepage;