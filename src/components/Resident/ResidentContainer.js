import axios from 'axios'
import {useEffect, useState} from 'react'
import ResidentInfo from './ResidentInfo.js'

const ResidentContainer = ({url}) => {
    const [picture, setPicture] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [origin, setOrigin] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [statusColor, setStatusColor] = useState("");

    useEffect(() => {
        const promise = axios(url);
        promise.then((response) => {        
            setPicture(response.data.image);
            setName(response.data.name);
            setStatus(response.data.status);
            setSpecies(response.data.species);
            setGender(response.data.gender);
            setOrigin(response.data.origin.name);
            setEpisodes(response.data.episode.length);
        })
    });

    useEffect(() => {
        switch(status) {
            case "Alive": setStatusColor('green')
            break;
            case "Dead": setStatusColor('red')
            break;
            default: setStatusColor('')
        }
    }, [status])

    return(
        <ResidentInfo 
        picture={picture}
        name={name}
        statusColor={statusColor}
        status={status}
        species={species}
        gender={gender}
        origin={origin}
        episodes={episodes}
        />
    )
}

export default ResidentContainer