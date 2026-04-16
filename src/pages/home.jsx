import {Link} from 'react-router-dom'
import{Projects} from './projects'
import{Contact} from './contact'
import{About} from './about'
import folder from '../assets/folder.svg'

export function Home(){
    return(
        <>

    <div className='flex
    align-bottom
    justify-center
    text-9xl
    z-0
    fixed
    top-1/2 
    left-[500px]
   -translate-x-1/2
   -translate-y-1/2
    font-thin
    opacity-15
    '
    >welcome</div>
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

        </>
    )
}