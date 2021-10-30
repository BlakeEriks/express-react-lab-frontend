import { useEffect, useState } from "react"

const About = ({url}) => {

    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch(url + 'about')
        const data = await repsonse.json()
        setAbout(data)
    }

    useEffect( () => getAboutData(), [])

    const loaded = () => {
        <div>
            <h2>{about.name}</h2>
            <h2>{about.email}</h2>
            <h2>{about.bio}</h2>
        </div>
    }

    return about ? loaded() : <h1>Loading</h1>
}

export default About