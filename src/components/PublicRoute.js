import { Redirect, Route } from "react-router-dom";
import { getToken } from "./Common";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render = {props => {
                return !getToken() ? <Component {...props} /> :
                    <Redirect to={{ pathname: "/home" }} />
            }}
        />
    )
}

export default PublicRoute
