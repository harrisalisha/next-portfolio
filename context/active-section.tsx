"use client"
import React, {useState, createContext, useContext} from 'react'

import type { SectionName } from '../app/lib/types' 

type ActiveSectionProviderProps = {children: React.ReactNode};

type ActiveSectionContextType = { 
    activeSection: SectionName;
    setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>;
    timeLastClick: number,
    setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
}

//context
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);


export default function ActiveSectionContextProvider({children}: ActiveSectionProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionName>('Home');

    const [timeLastClick, setTimeLastClick] = useState(0)//need to track this disable to obsever temprorary when user click on link

  return <ActiveSectionContext.Provider value={{
      activeSection,  
      setActiveSection,
      timeLastClick,
      setTimeLastClick
    
  }}>{children}</ActiveSectionContext.Provider>;
  
}


//custom hook use context to handle null val in context line 16
export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
      
       if(context === null){
        throw new Error('useActiveSectionContext must be used within an activeSectionContextProvider')
       }
       return context;
  }
  
