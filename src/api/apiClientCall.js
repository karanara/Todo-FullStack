import axios from "axios";
export const apiClientCall = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);