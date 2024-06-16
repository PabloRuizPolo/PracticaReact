import {
  ADDS_LOADED_COMPLETED,
  ADDS_LOADED_PENDING,
  ADDS_LOADED_REJECTED,
  AUTH_LOGIN_COMPLETED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
} from "./types";

export const defaultState = {
  auth: false,
  adds: {
    loaded: false,
    data: [],
  },
  error: null,
};

export const auth_login_pending = () => ({
  type: AUTH_LOGIN_PENDING,
});

export const auth_login_completed = () => ({
  type: AUTH_LOGIN_COMPLETED,
});

export const auth_login_rejected = (error) => ({
  type: AUTH_LOGIN_REJECTED,
  payload: error,
  error: true,
});

export const auth_logout = () => ({
  type: AUTH_LOGOUT,
});

export const adds_loaded_pending = () => ({
  type: ADDS_LOADED_PENDING,
});

export const adds_loaded_completed = (adds) => ({
  type: ADDS_LOADED_COMPLETED,
  payload: adds,
});

export const adds_loaded_rejected = (error) => ({
  type: ADDS_LOADED_REJECTED,
  payload: error,
  error: true,
});
