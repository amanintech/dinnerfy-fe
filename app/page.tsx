import InputSearch from "../components/InputSerach";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

export default function Home() {
  return (
   <div className="flex w-11/12 lg:w-8/12 h-full flex-col">
    <Nav />
    <Banner />
    <InputSearch />
   </div>
  );
}
