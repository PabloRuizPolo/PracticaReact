import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { withExtraArgument } from "redux-thunk";

import * as reducers from "./reducers";
import * as actions from "./actions";
import * as auth from "../pages/login/service";
import * as adds from "../pages/adverts/service";

const reducer = combineReducers(reducers);
const composeEnhancers = composeWithDevTools({ actions });

export default function confifureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(withExtraArgument({ services: { auth, adds } }))
    )
  );

  return store;
}
