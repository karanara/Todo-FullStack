import { useEffect, useState } from "react";
import { deleteTodoForUserName, retrieveAllTodosForUserName } from "../api/TodoApiService";
import { useUserCredentials } from "./AuthContext";
const ListTodoComponent = () => {
  const authContext = useUserCredentials()
  const username = authContext.userName
  const [todos,setTodos]=useState([])
  /*const todos = [
    //{ id: 1, description: 'Learn Spring Boot and Microservices', done: false, targetDate: targetDate },
    //{ id: 2, description: 'Learn React Full Stack', done: false, targetDate: targetDate },
    //{ id: 3, description: 'Learn React Dom', done: false, targetDate: targetDate }
  ];*/

  useEffect(()=>refreshTodos(),[])
  const [message,setMessage] = useState(null)
  const refreshTodos = ()=>{
       retrieveAllTodosForUserName(username)
       .then(response=>{
         setTodos(response.data)
       })
       .catch(error=>setTodos(error))
  }

  const deleteTodo =(id)=>{

    deleteTodoForUserName(username,id)
    .then (
      ()=>{
        setMessage(`Delete of todos with id = ${id} successful`)
        refreshTodos()
        //display message of successful delete and updated the todos list
      }
    )
    .catch(error=>setTodos(error))
  }

  return (
    <div className="text-center"> {/* Add the 'text-center' class to center the content */}
      <h1>Here are the Todos</h1>
      {message && <div
        className="bg-yellow-300 text-yellow-800 border-yellow-600 border px-4 py-3 rounded relative">
            {message}
        </div>
        }
      <div className="d-flex justify-content-center"> {/* Use 'd-flex' and 'justify-content-center' to center the table horizontally */}
      <table className="table border-collapse w-full mt-4">
  <thead className="bg-gray-800 text-white">
    <tr>
      <th className="py-2 px-4">Description</th>
      <th className="py-2 px-4">Is Done?</th>
      <th className="py-2 px-4">Target Date</th>
      <th className="py-2 px-4">Action</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo => (
      <tr key={todo.id} className="border-t hover:bg-gray-100">
        <td className="py-2 px-4">{todo.description}</td>
        <td className="py-2 px-4">{todo.done.toString()}</td>
        <td className="py-2 px-4">{todo.targetDate.toString()}</td>
        <td className="py-2 px-4">
          <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default ListTodoComponent;
