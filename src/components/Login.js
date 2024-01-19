import { useState} from "react";
import {useNavigate} from 'react-router-dom'

import { useUserCredentials } from "./AuthContext";

const Login=()=>{
    const [username,setUserName]=useState("ramya")
    const [password,setPassword]=useState("")
    const authContext = useUserCredentials()
    const navigate = useNavigate()
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    /*const handlSubmit =async()=>{
        if(await authContext.loginPage(username,password)){
            navigate(`/welcome/${username}`)
        }
        else{
            SetShowErrorMessage(true)
        }
    }*/
    async function handleSubmit() {
        if(await authContext.loginPage(username, password)){
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }
    return (
        <div >
             <div className="flex items-center justify-center">
                 <div className="text-center">
                 {showErrorMessage && <div className="text-2xl font-bold mb-3">Authentication Failed. 
                                                            Please check your credentials.</div>}
                <h1 className="text-3xl font-bold mb-4">Please Login to View Todos</h1>
                <div  className="flex items-center mb-4"> 
                <label className="mr-2">UserName :</label>
                <input className="border border-black p-2 " value={username} placeholder="Username" onChange={(e)=>{

                    setUserName(e.target.value)}}/>
                 </div>
                 <div  className="flex items-center mb-4"> 
                <label className="mr-2">Password :</label>
                <input className="border border-black p-2 " value={password} placeholder="password"onChange={(e)=>{
                setPassword(e.target.value)}}/>
                 </div>
                 <button className=" border border-black-500 items-center mb-4" onClick={handleSubmit}>Submit</button>
                </div>
                
            </div>

        </div>
    )
};
export default Login;