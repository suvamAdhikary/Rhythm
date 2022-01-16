import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components"



const Wrapper = styled.main`

`;

const Workshop = () => {
    const [heading, setHeading] = useState("album");

    const artistId = useParams();

    const dispatch = useDispatch();

    const { loading, data, error } = useSelector((store) => store?.artist?.artist);

    document.title = data?.name;
    
    useEffect(() => {

        setTimeout(() => {
        }, 500)

    }, [artistId])

    return loading ? <h1>Loading ...</h1> :
            error ? <h1>Something went wrong. Please try again later</h1> :
    (
        <>
            <Wrapper>
                <h1>WORKSHOP</h1>
                <div></div>
                <div>
                    <div>
                        <button disabled={heading === "album"} onClick={() => setHeading("album")} >ADD ALBUM</button>
                        <button disabled={heading === "song"} onClick={() => setHeading("song")} >ADD SONG</button>
                    </div>
                    <div>
                        
                        {/* {
                            heading !== "song" ?
                            <NewAlbum /> :
                            <NewSong />
                        } */}
                    </div>
                </div>
            </Wrapper>
        </>
    )

}

export default Workshop;