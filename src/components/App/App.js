import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../TrackList/Tracklist';
  

function App() {
  const [playListName, setPlayListName] = useState('');
  const [playList, setPlayList] = useState([]);
  const [searchResults, setSearchResults] = useState([
    {
      track: "Crazy Frog",
      artist: "Artist1",
      album: "Album1",
      id: "0001"
    }, {
      track: "Peanut Butter Jelly Time",
      artist: "Banana",
      album: "Album2",
      id: "3542"
    }
  ]); 

  const addToPlayList = (e) => {
    const trackId = e.target.value;
    const trackToAdd = searchResults.find(track => track.id === trackId);
    const foundCheck = playList.find(track => track.id === trackId);
     if(!foundCheck) {
      setPlayList((prevPlayList) => ([...prevPlayList, trackToAdd]));
     }
  }

  const removeFromPlayList = (e) => {
    const trackId = e.target.value;
    const newPlayList = playList.filter(track => track.id !== trackId);
    setPlayList(newPlayList);
  }

  const handleNameChange = (e) => {
    e.preventDefault();

    setPlayListName(e.target.newName.value);
  }

  return (
    <div className="App">
      <div>
        <SearchBar />
        <div className='results'>
          <SearchResults searchResults={searchResults} func={addToPlayList} addButton={true}/>
        </div>
        
      </div>
        <h2>{playListName}</h2>
        <span>
          <form onSubmit={handleNameChange}>
            <input type="text" name="newName" placeholder={playListName}/>
            <button type='submit'>confirm</button>
          </form>
          
        </span>
        
        <Tracklist trackList={playList} addButton={false} func={removeFromPlayList}/>
    </div>
  );
}

export default App;
