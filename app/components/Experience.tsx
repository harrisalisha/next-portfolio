"use client"

import { experiencesData } from '../lib/data';
import React from 'react'
import {motion } from 'framer-motion'
import SectionHeading from './SectionHeading';

import { useSectionInView } from '../lib/hook';



//used react-vertical-timeline-component
export default function Experience() {
  const { ref } = useSectionInView("Experience");

  // const theme = useTheme(); //from useContext theme-context.tsx
  return (
    <motion.section id="experience" 
    ref={ref}
    className="mb-2 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
  >
    
      <SectionHeading>My experience</SectionHeading>
      
        {experiencesData.map((item, index) => {
          return( <React.Fragment  key={index}>
      
            <div className='flex flex-col m-5 justify-center items-center'>
           {/*} <div className='w-max-[50rem] bg-slate-400 rounded-3xl m-6 px-6 py-3'>*/}
            <div className='bg-gray-200 border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' key={index}>  
                <h3 key={item.title}className="font-semibold capitalize">{item.title}</h3>
                <p key={item.location} className="font-normal !mt-0">{item.location}</p>
                <p key={item.description} className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
            </div>
            </div>
      
            </React.Fragment>);
            }) }
  
           
    </motion.section>
    
  );
}

