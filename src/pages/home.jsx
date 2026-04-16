import {Link} from 'react-router-dom'
import{Projects} from './projects'
import{Contact} from './contact'
import{About} from './about'

export function Home(){
    return(
        <>
        <Link to="/about">
        <button>About</button>
        </Link>

         <Link to="/contact">
        <button>Contact</button>
        </Link>

           <Link to="/projects">
        <button>Project</button>
        </Link>

        </>
    )
}