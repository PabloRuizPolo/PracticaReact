import {
  ADDS_CREATED_COMPLETED,
  ADDS_CREATED_PENDING,
  ADDS_CREATED_REJECTED,
  ADDS_DELETED_COMPLETED,
  ADDS_DELETED_PENDING,
  ADDS_DETAIL_COMPLETED,
  ADDS_DETAIL_PENDING,
  ADDS_DETAIL_REJECTED,
  ADDS_LOADED_COMPLETED,
  ADDS_LOADED_PENDING,
  ADDS_LOADED_REJECTED,
  AUTH_LOGIN_COMPLETED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
} from "./types";

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

export const adds_detail_pending = () => ({
  type: ADDS_DETAIL_PENDING,
});
export const adds_detail_completed = (add) => ({
  type: ADDS_DETAIL_COMPLETED,
  payload: add,
});
export const adds_detail_rejected = (error) => ({
  type: ADDS_DETAIL_REJECTED,
  payload: error,
  error: true,
});

export const adds_created_pending = () => ({
  type: ADDS_CREATED_PENDING,
});
export const adds_created_completed = (add) => ({
  type: ADDS_CREATED_COMPLETED,
  payload: add,
});
export const adds_created_rejected = (error) => ({
  type: ADDS_CREATED_REJECTED,
  payload: error,
  error: true,
});

export const adds_deleted_pending = () => ({
  type: ADDS_DELETED_PENDING,
});
export const adds_deleted_completed = (add) => ({
  type: ADDS_DELETED_COMPLETED,
  payload: add,
});
export const adds_deleted_rejected = (error) => ({
  type: ADDS_CREATED_REJECTED,
  payload: error,
  error: true,
});
