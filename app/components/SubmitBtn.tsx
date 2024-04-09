import React from 'react'
import { IoIosSend } from 'react-icons/io'
import { useFormStatus } from 'react-dom'

 const SubmitBtn = () => {
    //new featuress from next js
    const {pending }= useFormStatus();

    return (
        <button type="submit" className="group flex justify-center items-center bg-stone-600 p-4 text-white rounded-full hover:pointer
         focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 
         transition disabled:scale-100 disabled:bg-opacity-65
         disabled={pending}">  
         { pending ? ( <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>) : (<>
               Submit{" "}
               <IoIosSend className="text-xs opacity-70 transition-all 
               group-hover:translate-x-1 
               group-hover:-translate-y-1" />{" "}
               </>
         )}
        </button>

    )

 };

 

export default SubmitBtn;