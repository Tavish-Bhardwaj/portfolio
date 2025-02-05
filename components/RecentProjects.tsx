'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  const [iconOffsets, setIconOffsets] = useState<number[][]>([]);

  useEffect(() => {
    setIconOffsets(projects.map(({ iconLists }) => iconLists.map((_, index) => 5 * index * 2)));
  }, []);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">A small selection of {' '}
        <span className="text-purple"> Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }, projIndex) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40] h-[30-vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-img" layout="fill" objectFit="cover" />
                </div>
                <Image src={img} alt={title} width={500} height={300} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex item-center justify-between mt-7 mb-3">
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                      style={{ transform: `translateX(-${iconOffsets[projIndex]?.[index] || 0}px)` }}>
                      <Image src={icon} alt={icon} width={32} height={32} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                  <FaLocationArrow className='ms-3' color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
