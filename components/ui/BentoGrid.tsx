// // "use client"
// // import { cn } from "@/lib/utils";
// // import { GlobeDemo } from "./GridGlobe";
// // import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
// // import Lottie from "react-lottie";
// // import { useState } from "react";
// // import animationData from '@/data/confetti.json'
// // import MagicButton from "./MagicButton";
// // import {IoCopyOutline} from "react-icons/io5"
// // export const BentoGrid = ({
// //   className,
// //   children,
// // }: {
// //   className?: string;
// //   children?: React.ReactNode;
// // }) => {
// //   return (
// //     <div
// //       className={cn(
// //         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx ",
// //         className
// //       )}
// //     >
// //       {children}
// //     </div>
// //   );
// // };

// // export const BentoGridItem = ({
// //   className,
// //   title,
// //   description,
// //   img,
// //   imgClassName,
// //   titleClassName,
// //   spareImg,
// //   id,
// // }: {
// //   className?: string;
// //   title?: string | React.ReactNode;
// //   description?: string | React.ReactNode;
// //   img: string;
// //   imgClassName?: string;
// //   titleClassName?: string;
// //   spareImg?: string;
// //   id?: number;
// // }) => {

// //   const[copied,setCopied] = useState(false);

// //   const handleCopy = () =>{
// //     navigator.clipboard.writeText('bhardwajtavishofficial@gmail.com');
// //     setCopied(true);
// //   }
// //   return (
// //     <div
// //       className={cn(
// //         "row-span-1 relative  overflow-hidden rounded-3xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  bg-white  justify-between flex flex-col space-y-4 border border-white/[0.1] ",
// //         className
// //       )}
// //       style={{
// //         background: "rgb(4,7,29)",
// //         backgroundColor:
// //           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
// //       }}
// //     >
// //       <div className={`${id === 6 && 'flex justify-center'} h-full`}>
// //         <div className="w-full h-full absolute">
// //           {img && (
// //             <img
// //               src={img}
// //               alt={img}
// //               className={cn(imgClassName, "object-cver, object-center")}
// //             />
// //           )}
// //         </div>
// //         <div
// //           className={`absolute right-0 -bottom-5 ${
// //             id === 5 && "w-full opacity-80"
// //           }`}
// //         >
// //           {spareImg && (
// //             <img
// //               src={spareImg}
// //               alt={spareImg}
// //               className={"object-cver, object-center"}
// //             />
// //           )}
// //         </div>
// //         {id === 6 && (
// //           <BackgroundGradientAnimation>
// //             <div className="absolute z-50 flex-items-center justify-center text-white font-bold" />
// //           </BackgroundGradientAnimation>
// //         )}

// //         <div
// //           className={cn(
// //             titleClassName,
// //             "group-hover:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
// //           )}
// //         >
// //           <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
// //             {description}
// //           </div>

// //             <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10  ">
// //               {title}
// //             </div>

// //         {id===2 && <GlobeDemo />}

// //         {id===3 && (
// //           <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
// //             <div className="flex flex-col gap-3 lg:gap-6">
// //             {['React.js', 'Next.js', 'Typescript' ].map((item)=>(
// //               <span key ={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
// //                 {item}
// //               </span>
// //             ))}
// //             <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
// //           </div>

// //           <div className="flex flex-col gap-3 lg:gap-6">
// //             <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
// //             {['AWS', 'Prisma', 'Docker'].map((item)=>(
// //               <span key ={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
// //                 {item}
// //               </span>
// //             ))}

// //           </div>
// //           </div>
// //         )}

// //         {id === 6 && (
// //           <div className="mt-5 relative">
// //             <div className="absolute -bottom-5 right-0">
// //               <Lottie options={{
// //                 loop:copied,
// //                 autoplay:copied,
// //                 animationData:animationData,
// //                 rendererSettings:{
// //                   preserveAspectRatio: 'xMidYMid slice'
// //                 }
// //               }} />
// //             </div>
// //             <MagicButton
// //             title={copied? 'Email copied':'Copy my email'}
// //             icon={<IoCopyOutline />}
// //             position="left"
// //             otherClasses="bg-[#161a31]"
// //             handleClick={handleCopy}
// //             />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// // </div>
// //   );
// // };

// "use client"
// import { useState, useEffect } from "react";
// import { IoCopyOutline } from "react-icons/io5";
// import { cn } from "@/lib/utils";
// import MagicButton from "./MagicButton";
// import { GlobeDemo } from "./GridGlobe";
// import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
// import animationData from '@/data/confetti.json';

// import dynamic from 'next/dynamic';

// const LottieClient = dynamic(() => import('react-lottie'), { ssr: false });

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx ",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   img,
//   imgClassName,
//   titleClassName,
//   spareImg,
//   id,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   img: string;
//   imgClassName?: string;
//   titleClassName?: string;
//   spareImg?: string;
//   id?: number;
// }) => {
//   const [copied, setCopied] = useState(false);
//   const [isClient, setIsClient] = useState(false); // To check for client-side

//   // Check if we're on the client
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleCopy = () => {
//     navigator.clipboard.writeText('bhardwajtavishofficial@gmail.com');
//     setCopied(true);
//   };

//   return (
//     <div
//       className={cn(
//         "row-span-1 relative overflow-hidden rounded-3xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]",
//         className
//       )}
//       style={{
//         background: "rgb(4,7,29)",
//         backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >
//       <div className={`${id === 6 && 'flex justify-center'} h-full`}>
//         <div className="w-full h-full absolute">
//           {img && (
//             <img
//               src={img}
//               alt={img}
//               className={cn(imgClassName, "object-cover object-center")}
//             />
//           )}
//         </div>
//         <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
//           {spareImg && (
//             <img
//               src={spareImg}
//               alt={spareImg}
//               className={"object-cover object-center"}
//             />
//           )}
//         </div>
//         {id === 6 && <BackgroundGradientAnimation />}
//         <div
//           className={cn(
//             titleClassName,
//             "group-hover:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
//           )}
//         >
//           <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
//             {description}
//           </div>

//           <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
//             {title}
//           </div>

//           {id === 2 && <GlobeDemo />}
//           {id === 3 && (
//             <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
//               <div className="flex flex-col gap-3 lg:gap-6">
//                 {['React.js', 'Next.js', 'Typescript'].map((item) => (
//                   <span
//                     key={item}
//                     className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//                 <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
//               </div>

//               <div className="flex flex-col gap-3 lg:gap-6">
//                 <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
//                 {['AWS', 'Prisma', 'Docker'].map((item) => (
//                   <span
//                     key={item}
//                     className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {id === 6 && isClient && (
//             <div className="mt-5 relative">
//               <div className="absolute -bottom-5 right-0">
//                 <LottieClient
//                   options={{
//                     loop: copied,
//                     autoplay: copied,
//                     animationData: animationData,
//                     rendererSettings: {
//                       preserveAspectRatio: 'xMidYMid slice',
//                     },
//                   }}
//                 />
//               </div>
//               <MagicButton
//                 title={copied ? 'Email copied' : 'Copy my email'}
//                 icon={<IoCopyOutline />}
//                 position="left"
//                 otherClasses="bg-[#161a31]"
//                 handleClick={handleCopy}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import { GlobeDemo } from "./GridGlobe";
import dynamic from "next/dynamic";
import Image from "next/image";
import animationData from "@/data/confetti.json";

// ✅ Dynamically import components to prevent hydration errors
const LottieClient = dynamic(() => import("react-lottie"), { ssr: false });
const BackgroundGradientAnimation = dynamic(
  () => import("./BackgroundGradientAnimation").then((mod) => mod.BackgroundGradientAnimation),
  { ssr: false }
);


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bhardwajtavishofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt="Image"
              className={cn(imgClassName, "object-cover object-center")}
              fill
            />
          )}
        </div>
        {spareImg && (
          <div className="absolute right-0 -bottom-5">
            <Image
              src={spareImg}
              alt="Spare Image"
              className="object-cover object-center"
              width={100}
              height={100}
            />
          </div>
        )}

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-6">
                {["React.js", "Next.js", "Typescript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-6">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["AWS", "Prisma", "Docker"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <LottieClient
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
