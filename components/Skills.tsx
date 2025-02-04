"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import {skills} from '@/data'
const Skills = () => {
  return (
    <div className='py-20 ' id='skills'>
      <h1 className='heading mb-10'>
        A Glance over 
        <span className="text-purple"> my skills</span>
      </h1>
      <div className="flex flex-col items center ">
              <InfiniteMovingCards items={skills} direction="left" speed="normal" />

      </div>
    </div>
  )
}

export default Skills





// "use client";

// import React from "react";
// import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
// import { skills } from "@/data"; // Import skill list from data file

// const Skills = () => {
//   return (
//     <div className="h-[40rem] flex flex-col items-center justify-center">
//       <h2 className="text-3xl font-bold text-gray-100 mb-8">My Skills</h2>
//       <InfiniteMovingCards items={skills} direction="left" speed="normal" />
//     </div>
//   );
// }
// export default Skills;
