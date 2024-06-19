import {
  ADDS_CREATED_COMPLETED,
  ADDS_DELETED_COMPLETED,
  ADDS_DETAIL,
  ADDS_DETAIL_COMPLETED,
  ADDS_LOADED_COMPLETED,
  AUTH_LOGIN_COMPLETED,
  AUTH_LOGOUT,
  UI_RESET_ERROR,
} from "./types";

export const defaultState = {
  auth: false,
  adds: {
    loaded: false,
    data: [],
  },
  ui: {
    pending: false,
    error: null,
  },
};

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_COMPLETED:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function adds(state = defaultState.adds, action) {
  switch (action.type) {
    case ADDS_LOADED_COMPLETED:
      return { ...state, loaded: true, data: action.payload };
    case ADDS_DETAIL:
      return { ...state, data: [action.payload] };
    case ADDS_CREATED_COMPLETED:
      return { ...state, data: [action.payload, ...state.data] };
    case ADDS_DELETED_COMPLETED:
      const filteredData = state.data.filter(
        (add) => add.id !== action.payload.id
      );
      return { ...state, data: filteredData };
    default:
      return state;
  }
}

export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return { ...state, pending: false, error: action.payload };
  }
  if (action.type.endsWith("/pending")) {
    return { ...state, pending: true };
  }

  if (action.type.endsWith("/fulfilled")) {
    return { ...state, pending: false, error: null };
  }

  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null };
  }

  return state;
}
