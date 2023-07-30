import React from "react";
import Tracklist from "../TrackList/Tracklist";

 const SearchResult = ( {searchResults, func, addButton} ) => {
    
    return (
        <>
        <h2>Results</h2>
        <div>
         <Tracklist trackList={searchResults} func={func} addButton={addButton}/>
        </div>
        </>
    );
}
export default SearchResult;