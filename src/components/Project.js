const Project = ({project}) => {
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img className='project-img' src={project.image} alt={project.image}/>
            <div className="project-links">
                <a href={project.git} className="project-link">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="link-logo"/>
                    <span className="link-text">
                        GitHub
                    </span>
                </a>
                
                <a href={project.live} className="project-link">
                    <img src="https://static.thenounproject.com/png/2715693-200.png" alt="" className="link-logo"/>
                    <span className="link-text">
                        Live Site
                    </span>
                </a>
            </div>
        </div>      
    )
}

export default Project