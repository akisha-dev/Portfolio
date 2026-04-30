export function ProjectCard({name, description, skills, live}){
    return(
        <>
        <h1>{name}</h1>
        <div>{description}</div>
        <div className="flex flex-wrap gap-2">
            {skills.map(s => (
                <span key={s} className="bg-[#3D2B1F] text-[#F5EFD6] px-2 py-0.5 text-xs uppercase tracking-wide">
                    {s}
                </span>
            ))}
        </div>
        <div>{live}</div>
        </>
    )
}