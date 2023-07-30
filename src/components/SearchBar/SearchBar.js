import React, {useState} from "react";
import SearchResult from "../SearchResults/SearchResults";
import Tracklist from "../TrackList/Tracklist";

export default function SearchBar( {func, search} ) {

    return (
        <div className="searchBar"> 
            <input type="text" placeholder="Search for tracks" onChange={func} value={search}/>
        </div>
    );
}