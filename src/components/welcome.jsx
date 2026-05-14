import { Link } from "react-router-dom";
import { Header } from "./header"
import { useState } from "react"

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
left-1/2
-translate-x-1/2
-translate-y-1/2
border-2
border-[#2a1f0e]
bg-[#f0c040]
w-[90vw]
max-w-[380px]
"
        >
        <Header onClose={()=> setIsVisible(false)}/>
         
        <div className="p-6 flex flex-col gap-4 text-[#2a1f0e]">
            
            <div className="text-center">
                <p className="text-sm tracking-widest">WELCOME</p>
                <p className="text-2xl font-bold mt-1">Hi! I'm Akanksha.</p>
                <p className="text-sm mt-1">Frontend dev who loves creating creative web experiences</p>
            </div>

            <div className="border-t border-dashed border-[#2a1f0e] pt-4 text-sm text-center">
                &gt; Click a folder on the left to explore my work
            </div>

            <p className="text-xs text-center text-[#5a4a2a]">
                press X or click outside to close
            </p>
        </div>
        </div>
        </>
    )
}