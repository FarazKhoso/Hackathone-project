import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
   <div className="md:h-[1394px] md:w-[1856px] bg-[#2A254B] md:py-24 py-3">
<Header/>
<Hero />
  </div>
  );
}
