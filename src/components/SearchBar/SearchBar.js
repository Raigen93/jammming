import React, {useState} from "react";
import SearchResult from "../SearchResult/SearchResult";
import Tracklist from "../TrackList/Tracklist";

export default function SearchBar( ) {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value);
    }

    const tracks = [
        {
          track: "Crazy Frog",
          artist: "Artist1",
          album: "Album1",
          id: "0001"
        }
      ]

    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleChange} value={search}/>
            <Tracklist tracks={tracks}/>
            <p>{search}</p>
        </div>
    );
}