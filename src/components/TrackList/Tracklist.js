import React, {useEffect, useState} from "react";
import Track from "../Track/Track";

export default function Tracklist( { tracks } ) {
    const [trackList, setTrackList] = useState({tracks});
    
    trackList.forEach(element => {
        return (
            <Track track={element} />
    )
    });
    
}