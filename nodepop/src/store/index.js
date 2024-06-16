import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import * as reducers from "./reducers";
import * as actions from "./actions";

const reducer = combineReducers(reducers);
const composeEnhancers = composeWithDevTools({ actions });

export default function confifureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(withExtraArgument({ services: { auth, tweets } }))
    )
  );

  return store;
}
