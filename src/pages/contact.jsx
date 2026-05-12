import { Popup } from "../components/popup"
import { Footer } from "../components/footer"

export function Contact(){
    return (
       <>
       
        <Popup title='Contact'>
         <div className="pl-38
         pr-38
         pb-38
         pt-6
         space-y-6">
        <p
        className="
        text-3xl">CONTACT.EXE</p>  
        <div className="border-5"></div>
      
         <div
         className="pt-1
         border-3
         flex
         h-[55px]
         items-center
         justify-center
         pl-3
         mt-6
         bg-[#a8cfc0]">
            Available for Frontend internships-remote or also open to relocation 
         </div>

         <div
         className="pt-1
         border-l-6
         rounded-l
         flex
         items-center
         justify-center
         pl-3
         mt-6
         h-[77px]
         text-[#5a4a38]
        bg-[#ede4d3]">
            Self-taught. Building and shipping real projects.
            If you're looking for someone who learns fast then let's talk.
         </div>

         <div
         className="flex
          items-center
            w-[500px]
          border-b-2
          border-[#d8cdb8]
          rounded-xl
            
         
"
         >
            <div
            className="border-2
            flex
            items-center
            justify-center
            w-[100px]
            h-[37px]
            mr-9
            bg-[#2a1f0e]
            text-[#f5ede0]
            ">EMAIL</div> 
            <div> priyaakanksha031@gmail.com</div>
         </div>
        
        < div className="
        flex
          items-center 
          w-[500px]
          border-b-2
          border-[#d8cdb8]
          rounded-xl">
           <div
             className="border-2
            flex
            items-center
            justify-center
            w-[100px]
            h-[37px]
            mr-9
             bg-[#2a1f0e]
            text-[#f5ede0]
            
            ">GITHUB </div>  
           <div
         ><a href="https://github.com/akisha-dev" target="_blank" rel="noreferrer">
               github.com/akisha-dev
               </a></div>
         </div>
          < div
          className="
        flex
          items-center
            w-[500px]
          border-b-2
          border-[#d8cdb8]
          rounded-xl">

            <div
            className="border-2
            flex
            items-center
            justify-center
            w-[100px]
            h-[37px]
            mr-9
             bg-[#2a1f0e]
            text-[#f5ede0]
            ">LINKEDIN</div>   
            <div><a href="https://www.linkedin.com/in/akanksha-priya-006197356/" target="_blank" rel="noreferrer">
               linkedin.com/in/akanksha-priya
               </a></div>
         </div>
          < div
            className="
        flex
          items-center
            w-[500px]
          border-b-2
          border-[#d8cdb8]
          rounded-xl">
          <div
            className="border-2
            flex
            items-center
            justify-center
            w-[100px]
            h-[37px]
            mr-9
            bg-[#2a1f0e]
            text-[#f5ede0]
            ">
            LOCATION </div> 
            <div>Odisha,India</div>
         </div>

<a
href="https://mail.google.com/mail/?view=cm&to=priyaakanksha031@gmail.com&su=Internship%20Opportunity"
target="_blank">

         <button
         className="border-3
         mt-10
         w-[260px]
         h-[65px]
         mr-15
         bg-[#2a1f0e]
         text-[#f0c040]
         hover:bg-[#f0c040] 
         hover:text-[#2a1f0e]
         "
          style={{boxShadow: "3px 3px 0 #8ab4c8"}}
          >HIRE ME  &#8594;</button></a>


        <a href="/resume.pdf" 
        download="Akanksha_Priya_Resume.pdf">
         <button
           className="border-3
         w-[260px]
         h-[65px]
        text-[#2a1f0e]
        bg-[#f0c040]
        hover:bg-[#2a1f0e] 
        hover:text-[#f0c040]
        "
      style={{boxShadow: "3px 3px 0 #8ab4c8"}}
      >RESUME &darr;</button></a></div>

        </Popup>
    
       <div>
        <Footer />
       </div>
       </>
)}