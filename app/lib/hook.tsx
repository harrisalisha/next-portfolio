import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {useActiveSectionContext} from '../../context/active-section';//custom hook use context
import type { SectionName } from './types';

//type useSectionInViewProps ={
//   sectionName: SectionName;
//}

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {

  const { ref, inView }= useInView({threshold}); //reference page, n inview page

  const { setActiveSection, timeLastClick} = useActiveSectionContext();
  
  useEffect(()=> {
       if(inView && Date.now() - timeLastClick > 1000){
        //if click section more then 1 second , then
           setActiveSection(sectionName);
      }
  }, [inView, setActiveSection, timeLastClick, sectionName]);
  
  return {ref, };
}
