import { ProjectCard } from "./projectCard"
import{Link,useLocation} from "react-router-dom"
import {About} from "../pages/about"
import {Contact} from "../pages/contact"
import {Projects} from "../pages/projects"



export function Popup({ title,children}){
        const location = useLocation()

        const active = (path) => location.pathname === path ?"bg-[#8ab4c8] text-white":""
    return(
   <>
   <div className="fixed 
  top-[10px]
  left-2 right-2
  md:left-[60px] md:right-[60px]
  bottom-[70px]
   z-20
 bg-[#f5ede0]
  flex 
  flex-col
   border-2
   border-l-2
 border-[#2a1f0e]">

    <h1 
    className="
    bg-[#8ab4c8]
    text-xl
    p-2
    text-center
    border-t-3
     border-b-3
    ">C:\AKANKSHA\{title}</h1>
    <div
    className="
    p-1
    flex
    gap-6
    border-b-2
    ">
    <div>File</div> 
    <div>View</div>
    <div> Help</div>
    </div>

  <div className="flex md:hidden border-b-2">
  <Link to="/about" className={`flex-1 text-center py-2 border-r-2 ${active("/about")}`}>About</Link>
  <Link to="/projects" className={`flex-1 text-center py-2 border-r-2 ${active("/projects")}`}>Projects</Link>
  <Link to="/contact" className={`flex-1 text-center py-2 ${active("/contact")}`}>Contact</Link>
</div>
    <div className="flex
    flex-1
    overflow-hidden
    bg-[#f5ede0]
    ">
        <div
        className="hidden 
        md:flex
       md:flex-col
        w-[160px]
       border-r-2
        flex-shrink-0"
>
           
         <Link to="/about">
           <div
             className={`
           border-b-1
           pl-5
           h-[45px]
           flex
           items-center
           ${active("/about")} `}>About</div></Link>
          
          
          <Link to='/projects'> <div   
            className={`
           border-b-1
           pl-5
           h-[45px]
           flex
          items-center
           ${active("/projects")} `}>Projects</div></Link>
          
          
          <Link to="/contact"> <div 
            className={`
           border-b-1
           pl-5
           h-[45px]
           flex
          items-center
           ${active("/contact")} `}>Contact</div></Link>
        </div>
        <div className="flex-1
        overflow-y-auto">
        <div>
   {children}
</div>
</div>
</div>
</div>
   </>     
    )
}