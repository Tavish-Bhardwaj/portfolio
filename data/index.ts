import {
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiCloudflare,
  SiDocker,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; 

export const skills = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "React.js", icon: SiReact },
  { name: "Express.js", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "AWS", icon: FaAws },
  
  { name: "Docker", icon: SiDocker },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Prisma", icon: SiPrisma },
];




export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize learning, and foster a continuously growing mindset ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently Learning Advanced Backend Dev Technologies",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Personal Expense Tracker System",
      des: "Track all your expenditures and have an detailed analysis of all of your expenses and spending trends.",
      img: "/personalExpenseTracker.png",
      iconLists: ["/next.svg","/postgres.png", "/tail.svg", "/ts.svg", "/three.svg"],
      link: "https://personal-expense-tracker-ouh3-o2bqxsp20.vercel.app/dashboard",
    },
    {
      id: 2,
      title: "Real Estate Web App",
      des: "Created complete frontend of a real estate business using MERN and used other react libraries.",
      img: "/realEstateWebApp.png",
      iconLists: ["/re.svg", "/mongodb.png","/nodejs.png","/tail.svg"],
      link: "https://afab9691.realestatewebfrontend.pages.dev/",
    },
    {
      id: 3,
      title: "Career-Connect(Full Stack Job Portal)",
      des: "This is a full stack job portal project created in MERN stack and uses firebase for authentication.",
      img: "/careerConnect.png",
      iconLists: ["/re.svg", "/mongodb.png","/nodejs.png","/tail.svg"],
      link: "https://github.com/Tavish-Bhardwaj/Career-Connect-Job-Portal",
    },
    
  ];
  
  
 
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/Tavish-Bhardwaj"
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"https://x.com/tavish_bhardwaj"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/tavish-bhardwaj/"
    },
  ];