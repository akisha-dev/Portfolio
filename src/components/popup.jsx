import { ProjectCard } from "./projectCard"
export function Popup(){
    return(
   <>
   <div
   className="bg-[#f5ede0]">
    <h1 
    className="
    bg-[#8ab4c8]
    text-xl
    p-2
    text-center
    border-t-3
     border-b-3
    
    ">D:\AKANKSHA\projects</h1>
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
    <div className="grid
    grid-cols-2
    bg-[#f5ede0]
  
    ">
        <div
        className="flex
        flex-col
        gap-6
        w-[160px]
        border-r-2
        
      ">
           <div
           className="pt-5
           border-b-1
             bg-[   #ede4d3]  
           
         
           ">Folders</div>
           <div
             className="
           border-b-1">About</div>
           <div    className="
           border-b-1">Projects</div>
           <div    className="
           border-b-1">Contact</div>
        </div>
        <div
       className="flex
       border-3">
        <div
>
        <ProjectCard
        name="GitCard"
        description="GitHub profile to a shareable PNG card.
         Live API, png export, error handling.
         "
        skills={["React.js", "GitHub API",
                "html2canvas", "Tailwind", "Vercel"]}
        live="https://git-card-tau.vercel.app"></ProjectCard>

            <ProjectCard
        name="Keyboard Heatmap"
        description="A visual keyboard that lights up as you type.
            Tracks keystroke frequency in real-time and shifts key colors from white → yellow → red 
            using custom HSL math. Zero libraries, original logic."
        skills={["Vanilla JS", "HTML",
                "CSS", "Keyboard Events"]}
        live={'https://akisha-dev.github.io/Keyboard-heatmap/'}></ProjectCard>
        

        
            <ProjectCard
        name="TypingFlow"
        description="Typing speed test with WPM tracking and
         real-time feedback.
         No libraries."
        skills={["Vanilla JS", "HTML",
                "CSS", "DOM"]}

        live="https://akisha-dev.github.io/typing-test/"></ProjectCard>
        </div>
        
        </div>

</div>
</div>




   
   </>     
    )
}