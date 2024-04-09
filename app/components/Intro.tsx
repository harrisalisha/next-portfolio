"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { HiOutlineArrowSmallRight } from "react-icons/hi2"
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import {useInView} from 'react-intersection-observer'
import {useActiveSectionContext} from '../../context/active-section';//custom hook use context


export default function Intro() {
  const {ref, inView }= useInView({threshold: 0.5,}); //reference page, n inview page

    const { setActiveSection, setTimeLastClick} = useActiveSectionContext();
 
    
    useEffect(()=> {
         if(inView && Date.now()){
             setActiveSection("Home");
        }
    }, [inView, setActiveSection]);
    
  return (
    <section id="home"
    ref={ref}
       className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
  
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                initial={{ opacity:0, scale:0}}
                animate={{ opacity:1, scale:1}}
                transition={{ type: "tween", duration: 0.5}}
                >
                <Image 
                src="/hero.png"
                alt="picture of author" 
                width={200}
                height={200}
                quality={95}
                unoptimized
                priority={true}
                className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
            </motion.div>

            <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
            </div>

        </div>
        <div >
        <motion.h1 
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5rem] sm:text-2xl'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            Hi .. <span className="font-bold">Hello, I'm Norana.</span> 
            I'm a {" "} <span className="font-bold">full-stack developer</span> developer, 
            I love building  <span className="italic">applications and sites </span> , 
            my Focus is {" "}  <span className="underline">React (Next.js)</span>
        </motion.h1>
  
        </div>

        <motion.div className='flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium'
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
        >
            <Link 
               href="#contact" 
               className='group bg-gray-500 text-white cursor-pointer 
               px-7 py-3 flex items-center gap-3 rounded-full outline-none
               focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 
               transition'
               onClick={() => {
                setActiveSection("Contact");
                setTimeLastClick(Date.now());
               }}
               >
                Contact Me Here 
                <HiOutlineArrowSmallRight className="opacity-70 group-hover: translate-x-1 transition" /> 
            </Link>
            <a href='/cv.pdf' download={true} 
              className='group text-gray-500 cursor-pointer bg-white p-4 flex items-center gap-3 rounded-full 
                focus:scale-110  active:scale-105 hover:scale-110 outline-none
                hover:bg-gray-950 transition border border-black/10 dark:bg-white/10 dark:text-white/60'>DownLoad CV 
              <IoMdDownload className="opacity-70 group-hover: translate-x-1 transition"/> 
            </a>

            <a href="/https://linkedin.com" target='_blank' 
              className='group text-gray-500 cursor-pointer 
              bg-white p-4 flex items-center gap-3 rounded-full focus:scale-110 hover:scale-110 outline-none 
              hover:bg-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60'>
                <FaLinkedin className="opacity-70 group-hover: translate-x-1 transition"/>
            </a>

            <a href="/https://github.com" target='_blank' className='group text-gray-500 cursor-pointer
             bg-white p-4 flex items-center gap-3 rounded-full focus:scale-110 hover:scale-110 outline-none 
               hover:bg-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60'>
                <FaGithub className="opacity-70 group-hover: translate-x-1 transition"/>
            </a>
        </motion.div>
        
    </section>
  )
}

{/* src="https://images.pexels.com/photos/3767397/pexels-photo-3767397.jpeg"*/ }