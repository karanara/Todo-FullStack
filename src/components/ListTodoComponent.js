import { useEffect, useState } from "react";
import { retrieveAllTodosForUserName } from "../api/retrieveAllTodosForUserName";
const ListTodoComponent = () => {
  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay());
  const [todos,setTodos]=useState([])
  /*const todos = [
    //{ id: 1, description: 'Learn Spring Boot and Microservices', done: false, targetDate: targetDate },
    //{ id: 2, description: 'Learn React Full Stack', done: false, targetDate: targetDate },
    //{ id: 3, description: 'Learn React Dom', done: false, targetDate: targetDate }
  ];*/

  useEffect(()=>refreshTodos(),[])
  const refreshTodos = ()=>{
       retrieveAllTodosForUserName('ramya')
       .then(response=>{
         setTodos(response.data)
       })
       .catch(error=>setTodos(error))
  }

  return (
    <div className="text-center"> {/* Add the 'text-center' class to center the content */}
      <h1>Here are the Todos</h1>
      <div className="d-flex justify-content-center"> {/* Use 'd-flex' and 'justify-content-center' to center the table horizontally */}
        <table className="table"> {/* Add the 'table' class for basic Bootstrap styling */}
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(
              todo => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;
