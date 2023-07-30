import React from "react";

export default function Track( {track, func, addButton} ) {

    let button;
    if(addButton === true) {
        button = <button className="button" onClick={func} value={track.id}>+</button> ;
    } else {
        button = <button className="button" onClick={func} value={track.id}>-</button>
    }
    return (
        <div className="track">
         <div >
            <span> { track.name } by {track.artist}</span> 
        </div>
            {button}
        </div>
       
    );
    
}