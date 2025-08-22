import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext, useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [responseMessage, setResponseMessage] =useState<string>('');
    const navigate = useNavigate();
   const {login} = useAuth()
   

    const submitLogin = (event:any) => {
        event.preventDefault();
        const newPost = {
            email,
            password,
        };

        axios.post("http://localhost:3000/login",newPost).then((response)=>{
            console.log("responseeeee", response);
            login(response.data.user)
            navigate('/');
            setResponseMessage("Post created successfully!");

        }).catch((err)=>{
             setResponseMessage("Error during login");
        })
    }
return(
    <form onSubmit={submitLogin}>
        <div>
            <label>Email</label>
            <input type= "text" onChange={(event:any)=>setEmail(event.target.value)} value={email}/>
            <label>Password</label>
            <input type= "password" onChange={(event:any)=>setPassword(event.target.value)} value={password}/>
            <button type="submit">Login</button>
        </div>
        {responseMessage && <p>{responseMessage}</p>}
    </form>    
)
}

export default Login;