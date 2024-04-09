"use client"
import { useTheme } from '@/context/theme-context';
import React, {useEffect, useState} from 'react'
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

//type Theme = "light" | "dark";

const ThemeSwitch = () => {

    //const [theme, setTheme] = useState<Theme>('light');

    const {theme, toggleTheme} = useTheme();//useContext from themeC-context.tsx

   /* const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");//tailwind 
        }    
    }

    useEffect(()=> {
        const localTheme = window.localStorage.getItem('theme') as Theme | null ;

        if(localTheme === "dark"){
            document.documentElement.classList.add("dark");//tailwind       

        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
          setTheme("dark");
          document.documentElement.classList.add("dark");//tailwind 
        
        }

    }, []); //once loading */

  return (
    <button className='fixed bottom-10 right-10 bg-gray-400 w-[3rem] h-[3rem] 
    bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40
     border-shadow-2xl rounded-full flex items-center justify-center
     hover:scale-[1.15] active:scale-105 transition-all dark:bg-950'
     
     onClick={toggleTheme}
     >
        { theme === "light" ? (  <FaRegSun  />): ( <FaRegMoon />)}     
    </button>
  )
}

export default ThemeSwitch