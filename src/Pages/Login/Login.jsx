import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { logArtist } from "../../Redux/Artist/action";


const Wrapper = styled.main`

`;


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email,
            password,
        }

        dispatch(logArtist(payload));

        history.push("/artist");

    }

    useEffect(() => {

        // dispatch(logoutArtist())

    }, [])

    return (
        <>
            <Wrapper>
                <h1>ARTIST LOGIN</h1>
                <br />
                <form onSubmit={(e) => handleSubmit(e)} >
                    <fieldset>
                        <legend>EMAIL</legend>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your rhythm email"
                        />
                    </fieldset>
                    <br />
                    <fieldset>
                        <legend>PASSWORD</legend>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your secret rhythm password"
                        />
                    </fieldset>
                    <br />
                    <input type="submit" value="LOGIN" /> 
                </form>                
            </Wrapper>
        </>
    )
}

export default Login;