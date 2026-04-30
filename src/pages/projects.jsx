import { ProjectCard } from "../components/projectCard"
export function Projects(){
    return (
        <div>
        <div>
        <ProjectCard
        name="GitCard"
        description="Converts any GitHub username into a shareable profile card.
        Fetches live data via GitHub REST API and exports it as a downloadable PNG using html2canvas.
         Handles loading states, bad usernames, and failed requests.
        "
        skills={["React.js", "GitHub API",
             "html2canvas", "Tailwind", "Vercel"]}
        live="https://git-card-tau.vercel.app"></ProjectCard>
       </div>
        <div>
         <ProjectCard
        name="Keyboard Heatmap"
        description="A visual keyboard that lights up as you type.
         Tracks keystroke frequency in real-time and shifts key colors from white → yellow → red 
         using custom HSL math. Zero libraries, original logic."
        skills={["Vanilla JS", "HTML",
             "CSS", "Keyboard Events"]}
        live={'https://akisha-dev.github.io/Keyboard-heatmap/'}></ProjectCard>
        </div>

        <div>
         <ProjectCard
        name="TypingFlow"
        description="Typing speed test with word-by-word cursor tracking,
         real-time correct/incorrect color feedback, and WPM calculated from elapsed time. 
         Supports backspace and full word progression no libraries."
        skills={["Vanilla JS", "HTML",
             "CSS", "DOM"]}

        live="https://akisha-dev.github.io/typing-test/"></ProjectCard>
        </div></div>
        
)}