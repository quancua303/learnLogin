import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUser, removeUserSession } from "./Common";


const Home = (props) => {
    //const [account, setAccount] = useState([]);

    //const { keyTest } = useParams();

    //useEffect(() => {
    //    async function setAcc() {
    //        await axios.get(`user?userName=${keyTest}`).then(
    //            res => {
    //                const check = localStorage.getItem('data');
    //                console.log('data', check)
    //                console.log('header1', account)
    //            }
    //        ).catch(
    //            err => {
    //                console.log(err)
    //            }
    //        )
    //    }

    //    setAcc();
    //}, []);

    const user = getUser();

    const handleLogout = () => {
        removeUserSession();
        props.history.push("/login");
    }

    return (
        <div>
            User Name:{user.name}<br />
            <input type="button" value="Logout" onClick={handleLogout} />
        </div>
    )



}

export default Home
