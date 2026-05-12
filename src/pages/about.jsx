import {Popup} from "../components/popup"
import  pfp  from  "../assets/Pixel.png"

export function About(){
    return (
        <>
        <div>
        <Popup title="About">
        <div className="
        flex
        items-start
        gap-4
        p-4
        ">
        <div
        className="
        border-2
        border-[#2a1f0e]
        flex-shrink-0

        ">
        <img src={pfp}
        className="w-[90px] h-[90px] object-cover"
        >
        </img> </div>
        <div
        className="text-[#5a4a38]">
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
       pl-6">Open to Internships</div>
       
       </div>

        </div>
        <div>
            <p>&gt; HELLO_WORLD.EXE</p>
            <div>Hi, I am  Akanksha ,a second year B.Tech CSE student building frontend projects with React and JavaScript.
             I am currently looking for internships - open to relocation.</div>

           <p>&gt; SKILLS.SYS</p>    
          
          
        </div>
        </Popup>
        </div>
        </>
        
)}