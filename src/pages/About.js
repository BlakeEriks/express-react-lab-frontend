import { useEffect, useState } from "react"

const About = ({url}) => {

    const [about, setAbout] = useState(null)

    useEffect( () => {
        
        const getAboutData = async () => {
            const response = await fetch(url + 'about')
            const data = await response.json()
            setAbout(data)
        }
        
        getAboutData()
    
    }, [])

    const loaded = () => {
        return (
            <div>
                <h2>{about.name}</h2>
                <h2>{about.email}</h2>
                <h2>{about.bio}</h2>
            </div>
        )
    }

    return about ? loaded() : <h1>Loading</h1>
}

export default About