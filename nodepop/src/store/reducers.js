import { AUTH_LOGIN, AUTH_LOGOUT, ADDS_LOADED, ADDS_CREATED } from "./types";

export const defaultState = {
  auth: false,
  adds: [],
};

// export default function reducer(state = defaultState, action) {
//   switch (action.type) {
//     case AUTH_LOGIN:
//       //   return { auth: true, tweets: state.tweets };
//       return { ...state, auth: true };
//     case AUTH_LOGOUT:
//       //   return { auth: false, tweets: state.tweets };
//       return { ...state, auth: false };
//     case TWEETS_LOADED:
//       //   return { auth: state.auth, tweets: action.payload };
//       return { ...state, tweets: action.payload };
//     case TWEETS_CREATED:
//       //   return { auth: state.auth, tweets: [...state.tweets, action.payload] };
//       return { ...state, tweets: [...state.tweets, action.payload] };
//     default:
//       return state;
//   }
// }

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function adds(state = defaultState.adds, action) {
  switch (action.type) {
    case ADDS_LOADED:
      return action.payload;
    case ADDS_CREATED:
      return [...state.adds, action.payload];
    default:
      return state;
  }
}

// export default function reducer(state = defaultState, action) {
//   return {
//     auth: auth(state.auth, action),
//     tweets: tweets(state.tweets, action),
//   };
// }

/*import {
  ADDS_CREATED_COMPLETED,
  ADDS_DELETED_COMPLETED,
  ADDS_DETAIL_COMPLETED,
  ADDS_LOADED_COMPLETED,
  AUTH_LOGIN_COMPLETED,
  AUTH_LOGOUT,
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
    case ADDS_DETAIL_COMPLETED:
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

  return state;
}*/
