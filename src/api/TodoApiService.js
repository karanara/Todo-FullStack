import { apiClientCall } from "./apiClientCall";
export const retrieveAllTodosForUserName = (username) => apiClientCall.get(`/users/${username}/todos`);
export const deleteTodoForUserName =  (username, id) => apiClientCall.delete(`/users/${username}/todos/${id}`)
export const retreiveTodoApi = (username,id) => apiClientCall.get(`/users/${username}/todos/${id}`)
export const updateTodoApi= (username,id,todo)=> apiClientCall.put(`/users/${username}/todos/${id}`,todo)
export const createTodoApi = (username,todo) => apiClientCall.post(`/users/${username}/todos`,todo)
export const basicAuthToken = 
(token)=> apiClientCall.get(`/basicauth`,{
    headers : {
        Authorization:token
    }
})