import "./StylesComp.css";
import { useState } from 'react';

const SearchBox = ({handleSearch, handleRandom}) => {
    const [searchTerm, setSearchTerm] = useState(null)

    return(
        <div>
            <input type="number" className="input-search" placeholder="Write a location" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="button-search" onClick={() => handleSearch(searchTerm)}> Search </button>
            <button className="button-random" onClick={() => handleRandom()}>Random</button>
        </div>
    )
}

export default SearchBox