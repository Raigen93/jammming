import React, {useState} from "react";

export default function Track( { result } ) {
    const [track, setTrack] = useState(result);

    return (
        <div key={track.id}>
            <span> { track.track } </span> 
            <span> { track.artist } </span>
            <span> { track.album } </span>
        </div>
    );
}