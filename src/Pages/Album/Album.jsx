import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllAlbums } from "../../Redux/Album/action";



const Wrapper = styled.main`

`;


const Album = () => {
    const [page, setPage] = useState(1);
    const [showPages, setShowPages] = useState([1]);

    const { loading, data : {data, pages}, error } = useSelector((store) => store?.album?.albums);
    
    const dispatch = useDispatch();
    
    console.log(loading, data, error, pages);

    const handlePageNumbers = (no) => {
        let nums = [];
        for(let i = 1; i <= no; i++) {
            nums.push(i);
        }
        setShowPages(nums);
    }

    useEffect(() => {

        setTimeout(() => {

            dispatch(getAllAlbums(page));
            handlePageNumbers(pages);

        }, 500);

    }, [dispatch, pages, page])

    return (
        <>
            <Wrapper>
                <h1>ALBUMS</h1>
                <br />
                <div>
                    <div>
                        {data?.map((album) => (
                            <Link key={album?._id} to={`/album/${album._id}`} >
                                <img src={album?.coverPic} alt="coverImage" />
                                <h3>{album?.name}</h3>
                                <h2>Total Songs: {album?.noOfSong}</h2>
                                <div>
                                    <img src={album?.artists?.[0]?.profilePic} alt="artistImage" />
                                    <h2>{album?.artists?.[0]?.name}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div>
                        {showPages?.map((p) => (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

            </Wrapper>
        </>
    )
}

export default Album;