import xIcon from '../assets/x-button.svg'

export function ProjectCard({name, description, skills, live}){
    return(
        <>
        <div
        className="
        border-2
        border-gray
        m-8
        
        
        pb-4
        space-y-2
        flex
        flex-col
        w-[500px]">
        <div
        className="
        flex
        justify-between
        p-2
        border-b-2
        bg-[#8ab4c8]
        text-white">{name}
        <img src={xIcon}
        className='
        w-[25px]
        h-[20px]'></img></div>
        <div className='
        pl-2
        text-[12px]'>
        C:\PROJECTS\{name} &gt;</div>
        <div className='pl-2
        space-y-2'>
        <h1
        className='text-3xl'>{name}</h1>
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
        <div>{live}</div></div></div>
        </>
    )
}