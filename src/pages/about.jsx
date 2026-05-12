import {Popup} from "../components/popup"
import  pfp  from  "../assets/Pixel.png"

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
       pl-3
       mb-0
       ">Open to Internships</div>
       
       </div>

        </div>
        <div className="text-[#5a4a38] p-4
        ">
            <div className="border-[1.5px] mb-2"></div>
            <p className=" text-[#2a1f0e] text-xl">&gt; HELLO_WORLD.EXE</p>
            <div className="
            w-full mt-4 mb-3
           ">Hi, I am  Akanksha ,a second year B.Tech CSE student building frontend projects with React and JavaScript.
             I am currently looking for internships - open to relocation.</div>

           <p className=" text-[#2a1f0e] text-xl">&gt; SKILLS.SYS</p>   
           <div className="flex
            flex-wrap
            gap-2
            mt-4">
           {skills.map(s=>(
             <span key={s} className={
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
        </>
        
)}