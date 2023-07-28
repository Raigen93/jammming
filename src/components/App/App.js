import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
  

function App() {
  const [searchResults, setSearchResults] = useState('');

  return (
    <div className="App">
      <div>
        <SearchBar />
      </div>

    </div>
  );
}

export default App;
