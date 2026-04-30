import {Link} from 'react-router-dom'
import{Projects} from './projects'
import{Contact} from './contact'
import{About} from './about'
import { Welcome } from '../components/welcome'
import { Footer } from '../components/footer'
import FolderIcon from '../components/folderIcon'

export function Home(){
    return(
        <div
        className='relative
        z-0'>
        <div 
        className='
        fixed
        top-[140px]
        left-[120px]
        flex
        flex-col
         gap-12'
        
        
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
        <div className='z-2'>
        <Welcome /></div>

      
        
        </div>
    )
}