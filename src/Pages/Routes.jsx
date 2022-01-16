import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "../Components/PrivateRoutes";
import Album from "./Album/Album";
import AlbumDetails from "./AlbumDetails/AlbumDetails";


export default function Routes(){

    return (
    <>
        <Switch>

            <Route path="/" exact >
                <h1>Welcome to Rhythm</h1>
            </Route>

            <Route path="/login" >
                <h1>Login</h1>
            </Route>

            <Route path="/albums" >
                <Album />
            </Route>

            <Route path="/album/:id" >
                <AlbumDetails />
            </Route>

            <Route path="/songs" >
                <h1>Songs</h1>
            </Route>
            
            <PrivateRoutes path="artist">
                <h1>Artist</h1>
            </PrivateRoutes>

            <Route path="/testing" >
                Testing...
            </Route>


            <Route>
                <h1>404 Page not found</h1>
            </Route>

        </Switch>
    </>
    )
}