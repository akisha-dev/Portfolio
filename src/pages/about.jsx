import {Popup} from "../components/popup"
import  pfp  from  "../assets/Pixel.png"
import { Footer } from "../components/footer"

export function About(){
      const skills = [
  { name: 'REACT',       bg: 'bg-[#f0c040]' },
  { name: 'JAVASCRIPT',  bg: 'bg-[#f0c040]' },
  { name: 'TAILWIND',    bg: 'bg-[#a8cfc0]' },
  { name: 'VITE',        bg: 'bg-[#a8cfc0]' },
  { name: 'REST APIs',   bg: 'bg-[#e8a882]' },
  { name: 'GIT',         bg: 'bg-[#e8a882]' },
  { name: 'HTML',        bg: 'bg-[#c8b4f0]' },
  { name: 'CSS',         bg: 'bg-[#c8b4f0]' },
]
    return (
        <>
        <div>
        <Popup title="About">
       <div className="flex 
       flex-col
       items-center
       max-w-[700px]
       mx-auto
       
       px-4">
        <div 
       className="flex items-center gap-8
        p-4 w-full"
        >
        <div
        className="
        border-2
        border-[#2a1f0e]
        flex-shrink-0

        ">
        <img src={pfp}
        className="w-[100px] h-[100px] object-cover"
        >
        </img> </div>
        <div
        className="text-[#5a4a38]
        pt-5
        mt-4">
        <p className="
        text-3xl
        text-[#2a1f0e]
       
        ">
         AKANKSHA</p>
        <div> Frontend Developer &sdot; B.Tech CSE  (AI/ML)</div>
        <div>Sri Sri University  &sdot; Graduating 2028 </div>
        <div>CGPA: 9.17 / 10</div>
        <div
        className="
        mt-4
        border-2
       bg-[#d4f0e0]
       border-[#2a8a4a]
       text-[#1a5c30]
       w-[220px]
       pl-2
       mb-0
      flex items-center gap-2
       ">
        <span className="inline-block w-2 h-2
             rounded-full bg-[#2a8a4a] animate-pulse flex-shrink-0"
              />Open to Internships</div>
       
       </div>

        </div>
        <div className="text-[#5a4a38] p-4
        ">
            <div className="border-[1.5px] mb-2"></div>
            <p className=" text-[#2a1f0e] text-xl">&gt; HELLO_WORLD.EXE</p>
            <div className="
            w-full mt-4 mb-3
           ">Hi, I am  Akanksha, I started coding in November 2025. 
           In 6 months I have shipped GitCard (live GitHub API → PNG export), 
           built a keyboard heatmap in pure JS, and made this site-a Win98 OS desktop in React from scratch. 
           I am currently in 2nd year CSE (AI/ML) with 9.17 CGPA at Sri Sri University and 
          I am looking for a frontend internship where I can build real things.</div>

           <p className=" text-[#2a1f0e] text-xl">&gt; SKILLS.SYS</p>   
           <div className="flex
            flex-wrap
            gap-2
            mt-4">
           {skills.map(s=>(
             <span key={s.name} className={
             `${s.bg} border-2
              border-[#2a1f0e]
               text-[#2a1f0e]
              px-2
              py-0.5
              text-sm`}>
            {s.name}
            </span>
            ))

           } </div>
          
          
        </div></div>
        </Popup>
        </div>

        <div>
          <Footer />
        </div>
        </>
        
)}