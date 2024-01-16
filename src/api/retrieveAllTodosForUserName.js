import axios from "axios";
const apiClientCall = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);
export const retrieveAllTodosForUserName = (username) => apiClientCall.get(`/users/${username}/todos`);

