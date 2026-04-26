import { Header } from "./header"
import { useState } from "react";

export function Welcome(){
    const[isVisible,setIsVisible] = useState(true)
      
    if(!isVisible) return null;
    return(
        <>
        
        <div 
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setIsVisible(false)}  
      />
        
      
        <div className="
        z-50
        flex
        flex-col
        fixed
        top-1/2
        left-2/4
        -translate-x-1/2
        -translate-y-1/2
        border-2
        border-[#42242D]
        w-min-h
        p-0
        bg-[#f5ede0]
        space-y-2
        text-[18px]
        max-h-screen 
        overflow-y-auto
        w-[960px]
        ">
        <Header  onClose={()=> setIsVisible(false)}/>
         
        <div
        className="p-8"
        >
         <h1
         className="
         text-center"
        
         > WELCOME</h1>

         <div 
         className="p-4
         ">I'm Akanksha ,a front-end developer who loves building
            creative web experiences
         </div>

         <div
         className="
         p-4"> &gt;
        To explore: Click on the folders on
        the left side of
        the screen</div>
          <div className="p-4
          space-y-4">
         <div>About : Get to know me</div>
         <div>Projects : View my work</div>
         <div>Contact : Get in Touch</div></div>


         <div className= "p-6 space-y-4"
         > OR.....You can directly view my Projects
            and contact me by clicking the following buttons
         </div>
         <div className= "p-4 space-y-4 space-x-16" >
         <button
         className="
         border-2
         p-4
         bg-[#f0c040]
         ">View Projects</button>
         <button
         className="
         border-2
         p-4
         bg-[#8ab4c8]
         ">Contact Me</button>
         </div>
       <p> &gt; Press x button or click outside to close this pop-up</p>
        </div></div>
        </>
    )

}