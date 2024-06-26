"use client"
import React from 'react'
import {motion} from 'framer-motion'

type SectionHeadingProps = {
  children : React.ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <motion.h2 className='text-3xl font-medium capitalize mb-8 text-center'
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{delay: 0.175}}
    >{children}</motion.h2>
  )
}
