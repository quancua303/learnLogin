// JavaScript source code

import { Link, NavLink } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink exact activeClassName="active" className="navbar-brand" to={"/home"}>Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link active" aria-current="page" to={"/login"}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to={"/register"}>Sign up</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav