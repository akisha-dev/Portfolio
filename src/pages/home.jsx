import {Link} from 'react-router-dom'
import{Projects} from './projects'
import{Contact} from './contact'
import{About} from './about'
import folder from '../assets/folder.svg'
import { Welcome } from '../components/welcome'
import { Footer } from '../components/footer'

export function Home(){
    return(
        <div
        className='relative'>
        <div 
        className='
        fixed
        top-[140px]
        left-[30px]
        flex
        flex-col
         gap-6'
        
        
        >

    
        <div
        className='z-1'>
        <Link to="/about">   
        <img src={folder}
        width='30px'
        height='36px'
        className='invert'
        ></img> 
        <button>About</button>
        </Link>
       </div> 

        <div className='z-1'>
        <Link to="/projects">   
        <img src={folder}
        width='30px'
        height='36px'
        className='invert'
        ></img>
        
        <button>Projects</button>
        </Link>
        </div>


        <div className='z-1'>
        <Link to="/contact">   
        <img src={folder}
        width='30px'
        height='36px'
        className='invert'
        ></img>
        <button>Contact</button>
        </Link>
        </div> 


        </div>
        <div>
        <Welcome /></div>

        <div 
        className='
     fixed bottom-0 w-full'>
        <Footer /></div>
        
        </div>
    )
}