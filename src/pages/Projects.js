import { useEffect, useState } from "react"

const Projects = ({url}) => {

    const [projects, setProjects] = useState(null)

    const getProjectData = async () => {
        const response = await fetch(url + 'projects')
        const data = await response.json()
        setProjects(data)
    }

    useEffect( () => getProjectData(), [])

    const loaded = () => {
        projects.map( projects => 
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>GitHub</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>    
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects