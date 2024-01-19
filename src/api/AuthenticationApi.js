import { apiClientCall } from "./apiClientCall";

export const basicauthApi = (token) => {
  return apiClientCall.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
};
export const executeJwtAuthenticationService
    = (username, password) => 
        apiClientCall.post(`/authenticate`,{username,password})