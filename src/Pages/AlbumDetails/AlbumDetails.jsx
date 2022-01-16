import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { getAlbum } from "../../Redux/Album/action";


const Wrapper = styled.main`

`;


const AlbumDetails = () => {

    const albumId = useParams();

    const dispatch = useDispatch();

    const { loading, album, error } = useSelector((store) => store?.album?.albums);

    console.log(albumId, loading, album, error);

    useEffect(() => {

        setTimeout(() => {

            dispatch(getAlbum(albumId?.id));

        }, 500)

    }, [albumId, dispatch])

    return loading ?
        <h1>LOADING ...</h1> :
        error ?
        <h1>SOMETHING WENT WRONG</h1> :
    (
        <>
            <Wrapper>
                <h1>{album?.name}</h1>
                <section>
                    {album?.songs?.map((song) => (
                        <div key={song?._id} >
                            <h4>{song?.name}</h4>
                        </div>
                    ))}
                </section>
            </Wrapper>
        </>
    )
}

export default AlbumDetails;