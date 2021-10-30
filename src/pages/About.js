import { useEffect, useState } from "react"

const About = ({url}) => {

    const [about, setAbout] = useState(null)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect( () => {
        
        const getAboutData = async () => {
            const response = await fetch(url + 'about')
            const data = await response.json()
            setAbout(data)
        }

        getAboutData()
    
    }, [url])

    return (
        <>
        {
        about &&
        <div className="about-container" style={imageLoaded ? {} : {display: 'none'}}>
            <img className="about-headshot" src={about.headshot} alt="" onLoad={() => setImageLoaded(true)} />
            <div className="about-details">
                <h2 className="about-title">{about.name}</h2>
                <h5 className='about-email'>{about.email}</h5>
                <p>{about.bio}</p>
            </div>
        </div>
        }
        <h1 style={imageLoaded ? {display: 'none'} : {}}>Loading...</h1>
        </>
    )
}

export default About