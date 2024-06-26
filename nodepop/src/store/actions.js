import { getAddLoaded, getAddState } from "./selectors";
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
  TAGS_LOADED_COMPLETED,
  TAGS_LOADED_PENDING,
  TAGS_LOADED_REJECTED,
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

export const authLogin = (credentials) => {
  return async function (dispatch, _getState, { services: { auth }, router }) {
    try {
      dispatch(auth_login_pending());
      await auth.login(credentials);
      dispatch(auth_login_completed());
      const to = router.state.location.state?.from || "/";
      router.navigate(to, { replace: true });
    } catch (error) {
      dispatch(auth_login_rejected(error));
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

export const createdAdd = (add) => {
  return async function (dispatch, getState, { services: { adds }, router }) {
    try {
      dispatch(adds_created_pending());
      const newAdd = await adds.postAdds(add);
      dispatch(adds_created_completed(newAdd));
      router.navigate(`/adverts/${newAdd.id}`);
      return newAdd;
    } catch (error) {
      dispatch(adds_created_rejected(error));
    }
  };
};

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

export const deleteAddRedux = (id) => {
  return async function (dispatch, getState, { services: { adds }, router }) {
    const state = getState();
    const add = getAddState(id)(state);

    try {
      dispatch(adds_deleted_pending());
      await adds.deleteAdd(id);
      dispatch(adds_deleted_completed(add));
      router.navigate("/adverts");
    } catch (error) {
      dispatch(adds_deleted_rejected(error));
    }
  };
};

export const tags_loaded_pending = () => ({
  type: TAGS_LOADED_PENDING,
});
export const tags_loaded_completed = (tags) => ({
  type: TAGS_LOADED_COMPLETED,
  payload: tags,
});
export const tags_loaded_rejected = (error) => ({
  type: TAGS_LOADED_REJECTED,
  payload: error,
  error: true,
});

export const getApiTags = () => {
  return async function (dispatch, getState, { services: { adds } }) {
    try {
      dispatch(tags_loaded_pending());
      const tags = await adds.getTags();
      dispatch(tags_loaded_completed(tags));
      return tags;
    } catch (error) {
      dispatch(tags_loaded_rejected(error));
    }
  };
};

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
