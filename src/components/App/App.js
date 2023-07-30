import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../TrackList/Tracklist';
import Spotify from '../util/Spotify';

function App() {
  const [user, setUser] = useState(
    {
      user: 'Raigen',
      userId: '1',
      playListName: '',
      playList: []
    }
  );
  const testTracks = [{
    track: "Crazy Frog",
    artist: "Artist1",
    album: "Album1",
    id: "0001",
    uri: "0201"
  }, {
    track: "Peanut Butter Jelly Time",
    artist: "Banana",
    album: "Album2",
    id: "3542",
    uri: "0041"
  }];

  const [playListName, setPlayListName] = useState('My playlist');
  const [playList, setPlayList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');
   
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

  const saveListToUser = (e) => {
    e.preventDefault();
    
    setUser((prevUser) => ({
      ...prevUser,
      "playListName": playListName, 
      "playList": playList.map(track=> track.uri) 
  }));
  }

  const searchTrack = (e) => {
    e.preventDefault();
    setSearch(e.target.value);    
}

  useEffect(() => {
    if(playList.length > 0) {
      document.getElementById('saveButton').style.display="flex";
    } else {
      document.getElementById('saveButton').style.display="none";
    }
  }, [playList])

  useEffect(() => {
    if(search !== ''){
      Spotify.search(search).then(setSearchResults);
    } else {
      setSearchResults([]);
    }
  }, [search])

  return (
    <div className="App">
      
      <SearchBar func={searchTrack} search={search}/>
      
      <div className="main">
        <section>
          <div className="pageSection">
            <div className='results'>
            <SearchResults searchResults={searchResults} func={addToPlayList} addButton={true} className="searchResults"/>
            </div>
          </div>
          
        </section>

        <section >
          <div className="pageSection">
            <span className='container'>
            <h2>{playListName}</h2>
            <button id="dropButton"className='dropdown'> ◀ </button>
          </span>
          
            <span style={{display: 'none'}}>
              <form onSubmit={handleNameChange}>
                <input type="text" name="newName" placeholder={playListName}/>
                <button type='submit'>rename</button>
              </form>
            
            </span>
        <div>
          <Tracklist className="playList" trackList={playList} addButton={false} func={removeFromPlayList}/>
            <button id="saveButton" style={{display: 'none', height: "25px", margin: 'auto'}} onClick={saveListToUser}> Save Playlist </button>
        </div>
        
          </div>
          
        </section>
        </div>
    </div>
  );
}

export default App;
