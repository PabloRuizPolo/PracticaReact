import { createStore } from "react";

export default function confifureStore(preloadedState) {
  const store = createStore(reducer, preloadedState);

  return store;
}
