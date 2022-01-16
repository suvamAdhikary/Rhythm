import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"



const Wrapper = styled.main`

`;

const Artist = () => {

    const { loading, data, error } = useSelector((store) => store?.artist?.artist);

    console.log(loading, data, error);

    useEffect(() => {

    }, [])

    return (
        <>
            <Wrapper>
                <h1>WELCOME TO YOUR PLATFORM, {data?.name}</h1>
                <img src={data?.profilePic} alt="profilePic" />
                <button>
                    EDIT PROFILE
                </button>
                <Link to={`/artist/${data?._id}`}>
                    <button>    
                        EDIT MY ART
                    </button>
                </Link>
            </Wrapper>
        </>
    )
}

export default Artist;