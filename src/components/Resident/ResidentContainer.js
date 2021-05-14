import axios from 'axios'
import {useEffect, useState} from 'react'
import ResidentInfo from './ResidentInfo.js'

const ResidentContainer = ({url}) => {
    const[name, setName] = useState("");
    const[picture, setPicture] = useState("");
    const[status, setStatus] = useState("");
    const[origin, setOrigin] = useState("");
    const[episodes, setEpisodes] = useState("");

    useEffect(() => {
        const promise = axios(url);
        promise.then((response) => {
            console.log(response.data)
            setName(response.data.name)
            setPicture(response.data.image)
            setStatus(response.data.status)
            setOrigin(response.data.origin.name)
            setEpisodes(response.data.episode.length)
        })
    });

    return(
        <ResidentInfo 
        picture={picture}
        name={name}
        status={status}
        origin={origin}
        episodes={episodes}
        />
    )
}

export default ResidentContainer