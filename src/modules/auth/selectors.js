import { createSelector } from 'reselect';

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUser =  state => state.auth.user;
// export const getUser = createSelector(
//     state => state.auth.elements,
//     elements =>
//         elements.map(({ email, password }) => ({
//             email,
//             password
//         }))
// );
export const getIsLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;