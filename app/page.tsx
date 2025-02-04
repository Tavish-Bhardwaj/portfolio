import Grid from "@/components/Grid";
import Hero from "../components/Hero"
import {FloatingNav} from "@/components/ui/FloatingNav"
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
export default function Home() {
  return (


    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
     <FloatingNav navItems={navItems}/>
    <Hero />
    <Grid />
    <RecentProjects />
    <Skills/>
    <Footer/>
      </div>
      </div>
   
  );
}
