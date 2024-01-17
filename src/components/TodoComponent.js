import { useParams } from "react-router-dom"
import { useUserCredentials } from "./AuthContext"
import { useEffect, useState } from "react"
import { retreiveTodoApi } from "../api/TodoApiService"

const TodoComponent = ()=>{
    const authConext = useUserCredentials()
    const username = authConext.userName
    const [description,setDescription]= useState('')
    console.log(username)
    console.log("todocomponent")
    const {id}=useParams()
    useEffect(() => {
        retrieveTodos();
      }, [id]);
    const retrieveTodos= ()=>{
        retreiveTodoApi(username,id)
        .then((response)=>{
            setDescription(response.data.description)
        })
        .catch((error)=>console.log(error))
    }

    return(
        <div className="mx-auto max-w-screen-xl">
            <h1>Enter Todo Details here</h1>
            <div>
                description:{description}
            </div>

        </div>
      

    )
}
export default TodoComponent;