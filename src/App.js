import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBox from './components/SearchBox.js';
import LocationContainer from './components/Location/LocationContainer.js';
import ResidentContainer from './components/Resident/ResidentContainer.js';

function App() {
  const [query, setQuery] = useState(() => {return Math.floor(Math.random() * 108)});
  const [residents, setResidents] = useState([]);
  const Url=`https://rickandmortyapi.com/api/location/${query}`;

  useEffect (() => {
    const promise = axios.get(Url)
    promise.then(res => {
      setResidents(res.data.residents.slice(0, 10));
    })  
  }, [Url]);

  const residentsArr = residents.map((value) => (
      <ResidentContainer url={value}/>
  ));

  const handleSearchUniverse = (value) => (
    setQuery(value)
  );

  const handleRandomUniverse = () => (
    setQuery(Math.floor(Math.random() * 108))
  );

  return (
    <div className="App">
      <div className="banner">
        <div className="col-6 banner-search-box">
            <h1 className="title">Rick and Morthy App</h1>
            <SearchBox handleSearch={handleSearchUniverse} handleRandom={handleRandomUniverse} />
        </div>
        <div className="col-6 banner-location">
            <LocationContainer Url={Url} query={query} />
        </div>
      </div>
      <div className="body">
        { residents.length > 0 && residentsArr }
      </div>
    </div>
  );
}

export default App;
