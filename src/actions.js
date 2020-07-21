export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const login = (email, password) => ({
    type: LOGIN,
    payload: { email, password }
});
  
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
  
export const logout = () => ({ type: LOGOUT });
