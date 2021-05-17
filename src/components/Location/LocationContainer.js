import './Location.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import LocationInfo from './LocationInfo.js';

const LocationContainer = ({query, Url}) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState("");
    const [infoResidents, setInfoResidents] = useState("");

    useEffect(() => {
        if(query) {
            const promise = axios(Url)
            promise.then((response) => {
                setId(response.data.id)
                setName(response.data.name);
                setType(response.data.type);
                setDimension(response.data.dimension);
                setInfoResidents(response.data.residents.length);
            })
        }
    }, [query, Url]);

    return(
        <div>
            <div>
                <LocationInfo 
                id={id}
                name={name}
                type={type}
                dimension={dimension}
                residents={infoResidents}
                />
            </div>
        </div>
    )
}

export default LocationContainer