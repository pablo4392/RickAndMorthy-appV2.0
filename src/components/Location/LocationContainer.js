import './Location.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import LocationInfo from './LocationInfo.js'
import ResidentContainer from '../Resident/ResidentContainer.js'

const LocationContainer = ({query}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState("");
    const [infoResidents, setInfoResidents] = useState("");
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        if(query) {
            const Url = `https://rickandmortyapi.com/api/location/${query}`;
            const promise = axios(Url)
            promise.then((response) => {
                console.log(response.data)
                setName(response.data.name);
                setType(response.data.type);
                setDimension(response.data.dimension);
                setInfoResidents(response.data.residents.length);
                setResidents(response.data.residents.slice(0, 10));
            })
        }
    }, [query]);

    useEffect(() => {
        console.log(residents);
    }, [residents]);

    const residentsArr = residents.map((value) => (
        <ResidentContainer url={value}/>
    ));

    return(
        <div>
            <div>
                <LocationInfo 
                name={name}
                type={type}
                dimension={dimension}
                residents={infoResidents}
                />
            </div>
            <div>
                { residents.length > 0 && residentsArr }
            </div>
        </div>
    )
}

export default LocationContainer