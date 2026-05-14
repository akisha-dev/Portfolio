import { Welcome } from './welcome'

export function Header({onClose}){


    return(

  <div className="flex items-center justify-between h-[35px] border-b-2 border-black bg-[#8ab4c8] pl-3">
    <span className="text-sm font-mono">C:\AKANKSHA\portfolio</span>
    <button
      onClick={onClose}
      className="h-full px-3 border-l-2 border-black hover:bg-red-400 transition-colors"
    >
      ✕
    </button>
  </div>
)}