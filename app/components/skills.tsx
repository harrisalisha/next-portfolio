"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '../lib/data'
import {motion} from 'framer-motion'

import { useSectionInView } from '../lib/hook'

const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    y:100
  },
  animate:(index:number)=> (
   { opacity: 1, y: 0,
    transition : { delay: 0.05*index}
   }
  ),
}//animate stagered 0.05  delay * index

/** {
    opacity: 1,
    y:0,
    transition: {
      delay: 0.05,
    }
  } */

export default function Skills() {
   
const {ref} = useSectionInView("Skills")
    
  return (
    <section 
    ref={ref}
    id="skills"
    className='mt=8 max-w-[50rem] text-center sm:mb-40 scroll-mt-28 mb-28' >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-gray-800'>
        {skillsData.map((skill, index) => {
          return  <motion.li 
          className='bg-gray-200 border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' key={index}
          variants={fadeInAnimationVariants} 
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          custom={index}
          >{skill}</motion.li>;
        })}
      </ul>
    </section>
  )
}
