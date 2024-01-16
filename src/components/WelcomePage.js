import {useParams, Link} from 'react-router-dom'
import { useState } from 'react';
import { HellWorldApiService, HellWorldApiServicePathVariable } from '../api/HelloWorldApiService';
const WelcomePage =()=>{
    const {username} = useParams()
   const [info,setInfo] = useState();
    const handleCallHelloWorld = ()=>{
        /*HellWorldApiService()
        .then((response)=>handleSuccessResponse(response))
        .catch((error)=>handleErrorResponse(error))
        .finally(()=>console.log("ffinal method called"))*/

        HellWorldApiServicePathVariable('ramya')
        .then((response)=>handleSuccessResponse(response))
        .catch((error)=>handleErrorResponse(error))
        .finally(()=>console.log("ffinal method called"))
    };
    const handleSuccessResponse=(response)=>{
        console.log(response)
        setInfo(response.data);
    };
    const handleErrorResponse=(response)=>{
        console.log(response)
    };
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className='border bg-green-800 items-center' onClick={handleCallHelloWorld}>CallHelloWorld</button>
                <h1>{info && info.message}</h1>
            </div>
            
        </div>
    )
}
export default WelcomePage;