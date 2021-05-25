import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBox from './components/SearchBox.js';
import LocationContainer from './components/location/LocationContainer.js';
import ResidentContainer from './components/resident/ResidentContainer.js';
// import Pagination from './components/pagination/pagination';

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
            <img className="logo" src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" />
            <h6 className="subtitle"> App by Pablo CR</h6>
            <SearchBox handleSearch={handleSearchUniverse} handleRandom={handleRandomUniverse} />
        </div>
        <div className="col-6 banner-location">
            <LocationContainer Url={Url} query={query} />
        </div>
      </div>
      {/* <Pagination /> */}
      <div className="body">
        { residents.length > 0 && residentsArr }
      </div>
    </div>
  );
}

export default App;
