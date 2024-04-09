import {links} from '../lib/data'

export type SectionName = (typeof links)[number]['name'];//home, about , projects, contacts, there are in header

export type ActiveSectionProviderProps = {children: React.ReactNode};

export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>;
    timeLastClick: number,
    setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
}