import axios from "axios";
import { useState } from "react";

function Register() {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [cfpass, setCfpass] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fullName: name,
            password: pass,
            phoneNumber: phone,
            userName: username,
            email: email,
            cfPass: cfpass
        };
        axios.post('/user', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="input-group form-group my-1 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text w-10"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />

                </div>


                <div className="input-group form-group my-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text w-10"><i class="fas fa-envelope"></i></span>
                    </div>
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

                </div>

                <div className="input-group form-group my-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text w-10"><i class="fas fa-mobile"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)}/>

                </div>
                <div className="input-group form-group my-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text w-10"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input-group form-group my-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text w-10"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" placeholder="password" onChange={(e) => setPass(e.target.value)}/>
                </div>

                <div className="input-group form-group my-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text w-10"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="confirm-password" onChange={(e) => setCfpass(e.target.value)}/>
                </div>

                <div class="form-group">
                    <input type="submit" value="Save" className="btn btn-primary float-right login_btn" />
                </div>
            </form>
        </div>
    )

}

export default Register