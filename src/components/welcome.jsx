import { Header } from "./header"

export function Welcome(){
    return(
        <>
       
        <div className="
        absolute
       left-1/3
        top-42
        border-2
        border-[#42242D]
        w-[400px]
        h-[200px]
        text-center
        bg-black
        ">
         <Header />
         <div
         className="pt-10
         pb-4
         "> WELCOME</div>
         <p>_Select a folder to begin_</p>
        </div>
        </>
    )

}