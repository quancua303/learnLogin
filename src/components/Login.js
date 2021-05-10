import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { setUserSession } from "./Common";


const  Login = (props) => {
    //const [username, setUsername] = useState('');
    //const [pass, setPass] = useState('');
    //const [user, setUser] = useState([]);


    //const history = useHistory();
    //const handleSubmit = (e) => {
    //    e.preventDefault();
    //    axios.get(`user?userName=${username}&password=${pass}`).then(
    //        res => {
    //            console.log('login', res.data);
    //            //localStorage.setItem('token', res.data.token);

    //            localStorage.setItem('data', JSON.stringify(res.data));
    //            if (user.length === 0) {

    //            } else {
    //                let path = `home/${user[0].userName}`;
    //                history.push(path);
    //            }
    //            setUser(res.data);
    //        }
    //    ).catch(
    //        err => {
    //            console.log(err)
    //        }
    //    )

    //}

    //useEffect(() => {
    //    if (localStorage.getItem('user-info')) {
    //        history.push("/home")
    //    }

    //}, [])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setError(null);
        setLoading(true);
        const data = {
            username: username,
            password: password
        }
        axios.post("http://localhost:4000/users/signin", data).then(res => {
            setLoading(false);
            setUserSession(res.data.token, res.data.user)
            console.log(res);
            props.history.push("/home");
        }).catch(err => {
            setLoading(false);
            if (err.response.status === 401 || err.response.status === 400) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong");
            }
            console.log('err', err);
        })
    }

    return (
        <>
            <div className="container">
                <form>
                    <div className="input-group form-group my-1">
                        <input type="text" className="form-control" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="input-group form-group my-1">
                        <input type="password" className="form-control" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    {error && <div className="text-red">{error}</div>}
                    <div class="form-group">
                        <input type="button" value={loading ? "Loading ..." : "Login"} disabled={loading} className="btn btn-primary float-right login_btn" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </>
    )

}

export default Login
