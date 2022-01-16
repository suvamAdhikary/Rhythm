import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "../Components/PrivateRoutes";


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
                <h1>Albums</h1>
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