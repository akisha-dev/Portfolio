import xicon from '../assets/x-button.svg'
import { Welcome } from './welcome'

export function Header({onClose}){


    return(
 <div className="
 justify-between
 h-[35px]
 flex
 border-b-2
 border-black
 bg-[#8ab4c8]
 gap-46
 pl-1
 pt-1
 m-0
 
 
 ">
        C:\AKANKSHA\portfolio  
         
         <button
         onClick={onClose}><img src={xicon}
        className='
        
        w-[20px]
        h-[20px]'></img></button>

        </div>
    )
}