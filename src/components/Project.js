const Project = ({project}) => {
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img className='project-img' src={project.image} alt={project.image}/>
            <div className="project-links">
                <a href={project.git}>
                    <button>GitHub</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        </div>      
    )
}

export default Project