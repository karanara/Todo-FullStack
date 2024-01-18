import axios from "axios";
const apiClientCall = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);
export const retrieveAllTodosForUserName = (username) => apiClientCall.get(`/users/${username}/todos`);
export const deleteTodoForUserName =  (username, id) => apiClientCall.delete(`/users/${username}/todos/${id}`);
export const retreiveTodoApi = (username,id) => apiClientCall.get(`/users/${username}/todos/${id}`)
export const updateTodoApi= (username,id,todo)=> apiClientCall.put(`/users/${username}/todos/${id}`,todo)
