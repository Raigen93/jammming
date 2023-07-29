import React from "react";
import Track from "../Track/Track";

const Tracklist = ( props ) => {
        return (
            <>
                {props.trackList?.map((track) => {
                    return (
                        <Track 
                        track={track}
                        key={track.id}
                        artist={track.artist}
                        album={track.album}
                        func={props.func}
                        addButton={props.addButton}
                        />
                    )
                })}
            </>
        )
    
}

export default Tracklist;