"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '../lib/data'
import Project from './Project'

import { useSectionInView } from '../lib/hook'
import {motion} from 'framer-motion'

export default function Projects() {
   
const {ref} = useSectionInView("Projects", 0.5)
    
  return (
    <section 
    ref={ref}
    id="projects" className='scroll-mt-28 mb-28' >
        <SectionHeading >My Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => {
               return  <React.Fragment key={index}>
                <Project {...project}/>
    
            </React.Fragment>;
            })}
        </div>
    </section>
  )
}

