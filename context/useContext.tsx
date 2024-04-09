
'use Client'
import React , {createContext, useState}from 'react'
import { links } from '@/app/lib/data'

type linksss = (typeof links)[number]['name']

type sectionType = {
    section: linksss;
    setSection: React.Dispatch<React.SetStateAction <linksss>>;
}

//custom useContext
const context = createContext<sectionType | null >(null);//we dont want to use default value

type useContextProviderProps = {
    children : React.ReactNode
}


export const useContextProvider = ({children,}: useContextProviderProps) => {
    const [section, setSection] = useState<linksss>('Home')
  return (
    <context.Provider value={{
        section,
        setSection
    }}>{children}</context.Provider>
  )
}
