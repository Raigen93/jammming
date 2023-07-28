import React, {useState} from "react";
import Tracklist from "../TrackList/Tracklist";

export default function SearchResult( props ) {
    const [results, setResults] = useState('');

    return (
        <div className="searchResults">
         <Tracklist tracks={results} />
        </div>
    );
}