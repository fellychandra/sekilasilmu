import Breadcrumbs from "@/components/breadcrumbs";
import Search from "@/components/search";
import Tab from "@/components/tab";

export default async function Home() {
  return (
    <>
          <div className="min-h-screen mx-auto px-3 sm:px-3 lg:px-16 mt-20 bg-gray-50">
            <Breadcrumbs />
            <Search/>
            <Tab searchs=''/>
          </div>
    </>
  );
}
