import { ProjectCard } from "../components/projectCard"
import {Footer} from '../components/footer'
import { Popup } from "../components/popup"

export function Projects(){
    return (
  <div>
     <div className="z-10">
    <Popup />
    </div>
     <div
     className="z-0">
    <Footer/>
    </div>
 </div>
        
)}