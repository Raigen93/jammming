import React from "react";

export default function Track( {track, func, addButton} ) {

    let button;
    if(addButton === true) {
        button = <button onClick={func} value={track.id}>+</button> ;
    } else {
        button = <button onClick={func} value={track.id}>-</button>
    }
    return (
        <div>
            <span> { track.track } </span> 
            <span> { track.artist } </span>
            <span> { track.album } </span>
            
            {button}
        </div>
    );
    
}