import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoutArtist } from "../Redux/Artist/action";


const Wrapper = styled.header`

    >nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 1%;
        
        > a, > p {
            cursor: pointer;
            text-decoration: none;
            color: #000;
        }
    }
`;

const Header = () => {

    const [logged, setLogged] = useState(false);

    const { token } = useSelector((store) => store?.artist?.artist);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleLogout = () => {
        dispatch(logoutArtist());
        history.push('/');
    }

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

                    {
                        token === null?

                        (<Link to="/login">
                            ARTIST LOGIN
                        </Link>)

                        :

                        (<p to="/"  onClick={handleLogout}>
                            LOGOUT
                        </p>)
                    }

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