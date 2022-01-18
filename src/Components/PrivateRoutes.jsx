import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


export default function PrivateRoutes({ children, path, push }){

    const { token } = useSelector((store) => store?.artist?.artist);

    if(token === null || token === undefined) {
        return <Redirect to='/' push={push}/>;
    }

    return <Route path={path}>
        {children}
    </Route>

};