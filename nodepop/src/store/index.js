import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { withExtraArgument } from "redux-thunk";

import * as reducers from "./reducers";
import * as actions from "./actions";
import * as auth from "../pages/login/service";
import * as adds from "../pages/adverts/service";

import { errorsMiddlewares } from "./middlewares";

const reducer = combineReducers(reducers);
const composeEnhancers = composeWithDevTools({ actions });

export default function confifureStore(preloadedState, { router }) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        withExtraArgument({ services: { auth, adds }, router }),
        errorsMiddlewares(router, {
          404: "/404",
          401: "/login",
        })
      )
    )
  );

  return store;
}
