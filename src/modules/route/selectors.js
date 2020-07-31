// import { createSelector } from 'reselect';

export const getAddresses = state => state.route.addresses;
export const getRoute =  state => state.route.route;
export const getIsLoading = state => state.route.isLoading;
export const getError = state => state.route.error;
