import { ProjectCard } from "../components/projectCard"
import {Footer} from '../components/footer'
import { Popup } from "../components/popup"

export function Projects(){
    return (
  <div>
     <div className="z-10
    ">
    <Popup title="Projects">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
   <ProjectCard
        name="GitCard"
        description="GitHub profile to a shareable PNG card.
         Live API, png export, error handling.
         "
        skills={["React.js", "GitHub API",
                "html2canvas", "Tailwind", "Vercel"]}
        live={"https://git-card-tau.vercel.app"}></ProjectCard>

     <ProjectCard
        name="THIS SITE"
        description="Win98-style OS portfolio. 
        You're inside it right now.
."
        skills={["REACT ROUTER", "Tailwind",
                "CSS", "Keyboard Events"]}
        live={'https://akisha-dev.github.io/Keyboard-heatmap/'}>
        </ProjectCard>
        

     <ProjectCard
        name="Keyboard Heatmap"
        description="Visual keyboard that heatmaps your keystrokes in real-time. 
        Pure JavaScript, zero libraries."
        skills={["Vanilla JS", "HTML",
                "CSS", "Keyboard Events"]}
        live={'https://akisha-dev.github.io/Keyboard-heatmap/'}>
        </ProjectCard>
        

        
     <ProjectCard 
        name="TypingFlow"
        description="Typing speed test with WPM tracking and
         real-time feedback.
         No libraries."
        skills={["Vanilla JS", "HTML",
                "CSS", "DOM"]}
        live="https://akisha-dev.github.io/typing-test/">
        </ProjectCard></div>
</Popup> 
    </div>
     <div
     className="z-0">
    <Footer/>
    </div>
 </div>
        
)}