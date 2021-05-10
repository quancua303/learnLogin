import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './components/Common';
import axios from 'axios';

function App() {

    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }

        axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(
            res => {
                setUserSession(res.data.token, res.data.user);
                setAuthLoading(false);
            }
        ).catch(err => {
            removeUserSession();
            setAuthLoading(false);
        })
    }, []);

    if (authLoading && getToken()) {
        return <div className="">Checking Authentication ...</div>
    }

    return (
        <>
            <BrowserRouter>
                <Nav />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <PrivateRoute exact path="/home" component={Home} />
                            <PublicRoute path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;