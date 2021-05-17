import "./StylesComp.css";
import { useState } from 'react';

const SearchBox = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState(null)

    return(
        <div>
            <input type="number" className="input-search" placeholder="Write a location" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="button-search" onClick={() => handleSearch(searchTerm)}> Search </button>
        </div>
    )
}

export default SearchBox