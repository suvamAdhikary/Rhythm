import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoutes from "../Components/PrivateRoutes";
import Album from "./Album/Album";
import AlbumDetails from "./AlbumDetails/AlbumDetails";
import Artist from "./Artist/Artist";
import Login from "./Login/Login";
import Header from "../Components/Header";
import Workshop from "./Workshop/Workshop";


const Wrapper = styled.div``;


export default function Routes(){

    return (
    <>
    <Wrapper>
        <Header />
        <Switch>

            <Route path="/" exact >
                <h1>Welcome to Rhythm</h1>
            </Route>

            <Route path="/login" >
                <Login />
            </Route>

            <Route path="/albums" exact>
                <Album />
            </Route>

            <Route path="/album/:id" >
                <AlbumDetails />
            </Route>

            <Route path="/songs" >
                <h1>Songs</h1>
            </Route>
            
            <PrivateRoutes path="/artist" exact>
                <Artist />
            </PrivateRoutes>

            <PrivateRoutes path="/artist/:id" >
                <Workshop />
            </PrivateRoutes>

            <Route path="/testing" >
                Testing...
            </Route>


            <Route>
                <h1>404 Page not found</h1>
            </Route>

        </Switch>
    </Wrapper>
    </>
    )
}