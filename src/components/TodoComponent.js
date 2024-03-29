import { useNavigate, useParams } from "react-router-dom"
import { useUserCredentials } from "./AuthContext"
import { useEffect, useState } from "react"
import { createTodoApi, retreiveTodoApi,updateTodoApi } from "../api/TodoApiService"
import { Form,Formik,Field ,ErrorMessage} from "formik"
const TodoComponent = ()=>{
    const authConext = useUserCredentials()
    const username = authConext.userName
    const [description,setDescription]= useState('')
    const [targetDate,setTargetDate] = useState('')
    const {id}=useParams()
    const navigate = useNavigate();
    useEffect(() => {
        retrieveTodos();
      }, [id]);
    const retrieveTodos= ()=>{
        if(id !== -1 ){
            retreiveTodoApi(username,id)
        .then((response)=>{
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
        })
        .catch((error)=>console.log(error))
        }
    }
    const SubmitValues =(values)=>{
        const todo ={
            id:id,
            username:username,
            description:values.description,
            targetDate:values.targetDate,
            done:false
        }
        if(id === -1 ){
            createTodoApi(username,todo)
            .then((response)=>{
                navigate(`/todos`)
            })
            .catch((error)=>console.log(error))
        }
        else{
            updateTodoApi(username,id,todo)
        .then((response)=>{
            navigate('/todos')
        })
        .catch((error)=>console.log(error))
        }
    }

    const ValidateValues = (values)=>{
        let errors ={

        }
        if(values.description.length<5){
            errors.description='Enter atleast 5 characters'
        }
        if(values.targetDate==null){
            errors.targetDate='Enter valid date'
        }
        return errors;
    }

    return(
        <div className="mx-auto max-w-screen-xl">
            <h1>Enter Todo Details here</h1>
            <div>
                <Formik initialValues={{description,targetDate}}
                  enableReinitialize={true}
                  onSubmit={SubmitValues}
                  validate={ValidateValues}
                  validateOnBlur={false}
                  validateOnChange={false}
                >
                    {
                        (props)=>(
                            <Form>
                                 <ErrorMessage 
                                name="description"
                                component="div"
                                className = "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4"
                            />
                            
                            <ErrorMessage 
                                name="targetDate"
                                component="div"
                                className = "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4"
                            />
                                <fieldset>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                    <Field type="text" className="border border-gray-300 p-2 w-full" name="description"></Field>                               
                                </fieldset>
                                <fieldset>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">TargetDate</label>
                                    <Field  className="text-red-500 p-2 w-full" type="date" name="targetDate"></Field>                               
                                </fieldset>
                                <div>
                                    <button type ="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </div>
      

    )
}
export default TodoComponent;