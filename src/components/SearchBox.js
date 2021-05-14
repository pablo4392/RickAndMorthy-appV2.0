// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const SearchBox = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState(null)

    return(
        <div className="input-group mb-1">
            <input className="form-control" placeholder="Write a location" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="btn btn-outline-secondary" onClick={() => handleSearch(searchTerm)}> Search </button>
        </div>
    )
}

export default SearchBox