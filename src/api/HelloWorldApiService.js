import { apiClientCall } from "./apiClientCall";
export const HellWorldApiService = () =>apiClientCall.get("http://localhost:8080/hello-world")
export const HellWorldApiServicePathVariable = (username) => apiClientCall.get(`http://localhost:8080/hello-world/path-variable/${username}`);

