import axios from "axios";
const apiClientCall = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);
export const HellWorldApiService = () =>apiClientCall.get("http://localhost:8080/hello-world")
export const HellWorldApiServicePathVariable = (username) => apiClientCall.get(`http://localhost:8080/hello-world/path-variable/${username}`);

