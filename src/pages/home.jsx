import {Link} from 'react-router-dom'
import{Projects} from './projects'
import{Contact} from './contact'
import{About} from './about'
import { Welcome } from '../components/welcome'
import { Footer } from '../components/footer'
import FolderIcon from '../components/folderIcon'
import txt from '../assets/txt.svg'
import github from '../assets/github.svg'

export function Home(){
    return(
       <div className="h-screen overflow-hidden">

         
        <div
        className='
        z-0
      mx-auto mt-6 w-[280px]
      md:fixed md:top-1/3 md:left-1/2
      md:-translate-x-1/2 md:-translate-y-1/2
      md:w-[300px]
        flex
        flex-col
        border-1
       
        p-7
        bg-[#f5ede0]
        text-[#5a4530]
        border-[#2a1f0e]
        gap-2
        '
        style={{'box-shadow':"1.5px 1.5px 0px #2a1f0e"}}>
          <p className='text-[18px]
          text-[#2a1f0e]'>  README.TXT  </p>
            <div className='border-1'>
            </div>
            <div>&gt; Frontend dev</div>
           <div> &gt; React · JS · Tailwind</div>
           <div> &gt; Open to internships</div>
           <div> &gt; graduating in 2028</div>
            
        </div>   
        <div 
        className="
      flex
      flex-row
      justify-center
      gap-8 
      mt-6
      md:fixed
      md:flex-col
      md:top-[60px]
      md:left-1/5
      md:gap-16 
      md:mt-0
    "
        
        
        >

    
        <div
        className='z-0'>
        <Link to="/about">   
        <FolderIcon color="#a8cfc0" /> 
        <button>About</button>
        </Link>
       </div> 

        <div className='z-0'>
        <Link to="/projects">   
       <FolderIcon color="#f0c040" />  
        <button>Projects</button>
        </Link>
        </div>


        <div className='z-0'>
        <Link to="/contact">   
       <FolderIcon color="#e8a882" />
        <button>Contact</button>
        </Link>
        </div> 
        



          <div 
        className='
     fixed bottom-0 w-full'>
        <Footer /></div>


        </div>
        <div className='
        
        flex 
        flex-row
        justify-center
        gap-8
        mt-6
        md:fixed
        md:flex-col
        md:gap-12
        md:top-[60px]
        md:right-50 
        md:mt-0
"
'>
       

         <a href="/resume.pdf" 
        download="Akanksha_Priya_Resume.pdf">   
         <button className=''>
                <div className='border-2
                 bg-[#f5ede0]
                 flex
                 justify-center
                 items-center
                p-2'>
                <img src={txt}
                className="w-[30px]
                h-[30px]
                object-cover"></img></div>
                Resume
            </button></a>
        
       
         <a href="https://github.com/akisha-dev" target="_blank" rel="noreferrer">
            <button className=''>
                <div className='border-2
                 bg-[#f5ede0]
                 flex
                 justify-center
                 items-center
                p-2'>
                <img src={github}
                className="w-[30px]
                h-[30px]
                object-cover"></img></div>
               github
            </button>
</a>
        
        </div>
        <div className='z-2'>
        <Welcome /></div>

      
        
        </div>
    )
}