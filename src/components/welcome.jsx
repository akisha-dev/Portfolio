import { Header } from "./header"

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
        flex
        flex-col
        absolute
       left-1/4
        border-2
        border-[#42242D]
        w-min-h
        p-0
        bg-[#f5ede0]
        space-y-2
        text-[18px]
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
       <p> &gt; Press x button to close this pop-up</p>
        </div></div>
        </>
    )

}