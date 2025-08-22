import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    console.log(lastName);
    const [responseMessage,setResponseMessage] = useState<string>('');

    const handleRegisterSubmit = (event:any) =>{
        event.preventDefault();
        const newPost = {
            firstName,
            lastName,
            email,
            password,
        }

        axios.post("http://localhost:3000/signup",newPost).then((response)=>{
                setResponseMessage("Registered Successfully");
        }).catch((err)=>{
                setResponseMessage("Unable to register")
        })
    }

return(
    <form onSubmit = {handleRegisterSubmit}>
        <div>
            <label>FirstName</label>
            <input type= "text" onChange={(event)=> setFirstName(event.target.value)} value={firstName} required/>
            <label>LastName</label>
            <input type= "text" onChange={(event)=> setLastName(event.target.value)} value={lastName}/>
            <label>Email</label>
            <input type= "text" onChange={(event)=> setEmail(event.target.value)} value={email} required/>
            <label>Password</label>
            <input type= "password" onChange= {(event)=> setPassword(event.target.value)} value={password} required/>
        </div>
        {responseMessage && <p>setResponseMessage</p>}
    </form>
)

}

export default Register;