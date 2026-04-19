import { useState,useEffect } from "react"
import github from '../assets/github.svg'
import linkedin  from '../assets/linkedin.svg'
export function Footer(){
 const[currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString('en-Us',{hour12: true}))
;

useEffect(()=>{
    setInterval(()=>{
        setCurrentTime(new Date().toLocaleTimeString('en-Us',{hour12: true}))
},1000)},[])

    return(
        <div className="  
        fixed bottom-0 left-0 w-full 
        flex flex-1 
        items-center 
        border-t-2
        h-[65px]
        border-[#211216]
        bg-[#42242D]
       
        
        ">
            <div className='flex
            flex-1 
            gap-10
            items-center
            pl-13
           '>
            
            <a href="https://github.com/akisha-dev"
            target="_blank"
            rel="noopener noreferrer" >
            <img src={github}
            className="w-[30px]
            h-[30px] invert
            "></img></a>

             <a href="https://www.linkedin.com/in/akanksha-priya-006197356/"
            target="_blank"
            rel="noopener noreferrer" >
            <img src={linkedin}
            className="w-[30px]
            h-[30px] invert
            "></img></a>
              </div>

          <div className="flex-1 flex justify-end
          pr-4">
            {currentTime}</div>
        </div>

    )
} 