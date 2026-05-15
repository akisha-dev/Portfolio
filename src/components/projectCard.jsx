import { Link } from 'react-router-dom'

export function ProjectCard({name, description, skills, live}){
    return(
        <>
        <div
        className="
        border-2
        border-[#2a1f0e] 
        pb-2
        space-y-1
        flex 
        flex-col
        bg-[#f5ede0]  
        ">
        <div
        className="
        flex
        justify-between
        p-2
        border-b-2
        bg-[#2a1f0e]
        text-[#f0c040]">{name}

       <div className='bg-[#2a1f0e]
       text-[#f0c040]'> [LIVE]</div>
        </div>
        <div className="
        pl-2
        text-[12px]">
        C:\Projects\{name} &gt;
        </div>
        <div className='pl-2
        space-y-2
        '>
        <h1
        className='text-base
        font-semibold'>{name}</h1>
        <div
        className="
        border-l-8
        rounded-l
        m-3
        pl-3
        border-[#8ab4c8]">{description}</div>
        <div className="flex flex-wrap gap-2">
            {skills.map(s => (
                <span key={s} className="bg-[#3D2B1F] text-[#F5EFD6] px-2 py-0.5 text-xs uppercase tracking-wide">
                    {s}
                </span>
            ))}
        </div>
     {live && <div className="flex items-center gap-2">
     <span className="inline-block w-2 h-2 rounded-full bg-[#6a9e6a] animate-pulse flex-shrink-0"/>
       <u>
       <a href={live}
       target="_blank"
       rel="noreferrer"> 
       <div className="break-all">{live}</div>
       </a>
       </u>
       </div>}
       </div></div>
        </>
    )
}