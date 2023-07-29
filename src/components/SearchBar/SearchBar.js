import React, {useState} from "react";
import SearchResult from "../SearchResults/SearchResults";
import Tracklist from "../TrackList/Tracklist";

export default function SearchBar( {func, search} ) {

    return (
        <div>
            <input type="text" placeholder="Search" onChange={func} value={search}/>
        </div>
    );
}