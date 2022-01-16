import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Wrapper = styled.header`

`;

const Header = () => {

    const [logged, setLogged] = useState(false);

    const { token } = useSelector((store) => store?.artist?.artist);


    useEffect(() => {

        setTimeout(() => {

            token !== null && token !== undefined ? setLogged(true) : setLogged(false);

        }, 100)

    }, [token])


    return (
        <>
            <Wrapper>
                <nav>
                    <Link to="/" >
                        HOME
                    </Link>

                    <Link to="/albums">
                        ALBUMS
                    </Link>

                    <Link to="/login">
                        ARTIST LOGIN
                    </Link>

                    {
                        logged 
                        
                        &&

                        <Link to="/artist" >
                            ARTIST
                        </Link>
                    }

                </nav>
            </Wrapper>
        </>
    )
}

export default Header;