import {Link} from 'react-router-dom'
import{Projects} from './projects'
import{Contact} from './contact'
import{About} from './about'
import folder from '../assets/folder.svg'
import { Welcome } from '../components/welcome'

export function Home(){
    return(
        <>
        <div 
        className='
        relative
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
        ></img></Link> 
        <Link to="/about">
        <button>About</button>
        </Link>
       </div> 

        <div className='z-1'>
        <Link to="/projects">   
        <img src={folder}
        width='30px'
        height='36px'
        className='invert'
        ></img></Link> 
        <Link to="/projects">
        <button>Projects</button>
        </Link>
        </div>


        <div className='z-1'>
        <Link to="/contact">   
        <img src={folder}
        width='30px'
        height='36px'
        className='invert'
        ></img></Link> 
        <Link to="/contact">
        <button>Contact</button>
        </Link>
        </div> 


        </div>
        <Welcome />
        
        </>
    )
}