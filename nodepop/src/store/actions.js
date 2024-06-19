import { getAddDetail, getAddLoaded, getAddState } from "./selectors";
import {
  ADDS_CREATED_COMPLETED,
  ADDS_CREATED_PENDING,
  ADDS_CREATED_REJECTED,
  ADDS_DELETED_COMPLETED,
  ADDS_DELETED_PENDING,
  ADDS_DETAIL,
  ADDS_LOADED_COMPLETED,
  ADDS_LOADED_PENDING,
  ADDS_LOADED_REJECTED,
  AUTH_LOGIN_COMPLETED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
  UI_RESET_ERROR,
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

export const authLogin = (inputValues) => {
  return async function (dispatch, _getState, { services: { auth } }) {
    try {
      dispatch(auth_login_pending());
      await auth.login(inputValues);
      dispatch(auth_login_completed());
    } catch (error) {
      dispatch(auth_login_rejected(error));
      throw error;
    }
  };
};

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

export const addsLoad = () => {
  return async function (dispatch, getState, { services: { adds } }) {
    const state = getState();
    if (getAddLoaded(state)) {
      return;
    }
    try {
      dispatch(adds_loaded_pending());
      const addsPayload = await adds.getAdds();
      dispatch(adds_loaded_completed(addsPayload));
    } catch (error) {
      dispatch(adds_loaded_rejected(error));
      throw error;
    }
  };
};

export const addsDetail = (add) => ({
  type: ADDS_DETAIL,
  payload: add,
});

export const addLoad = (id) => {
  return async function (dispatch, getState, { services: { adds } }) {
    const state = getState();
    if (getAddState(id)(state)) {
      return;
    }

    const addPayload = await adds.getAdd(id);
    console.log(addPayload);
    dispatch(addsDetail(addPayload));
  };
};

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

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
