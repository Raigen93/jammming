import React, {useState} from "react";
import SearchResult from "../SearchResults/SearchResults";
import Tracklist from "../TrackList/Tracklist";

export default function SearchBar( props ) {
    const [search, setSearch] = useState(props.search);

    const handleChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleChange} value={search}/>
            <p>{search}</p>
        </div>
    );
}