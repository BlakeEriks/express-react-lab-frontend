import { useEffect, useState } from "react"
import Project from "../components/Project"

const Projects = ({url}) => {

    const [projects, setProjects] = useState(null)

    useEffect( () => {
        
        const getProjectData = async () => {
            const response = await fetch(url + 'projects')
            const data = await response.json()
            setProjects(data)
        }

        getProjectData()
    }, [url])

    const loaded = () => {
        return (
            <div className="projects">
                {projects.map( (project, index) => 
                    <Project project={project} key={index}/>
                )}
            </div>
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects