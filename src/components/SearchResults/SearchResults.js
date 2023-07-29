import React from "react";
import Tracklist from "../TrackList/Tracklist";

 const SearchResult = ( {searchResults, func, addButton} ) => {
    
    return (
        <div className="searchResults">
            <h2>Results</h2>
         <Tracklist trackList={searchResults} func={func} addButton={addButton}/>
        </div>
    );
}
export default SearchResult;