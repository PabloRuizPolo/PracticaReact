export const getIsLogged = (state) => state.auth;

export const getAddsState = (state) => state.adds.data;
export const getAddLoaded = (state) => state.adds.loaded;

/*
export const getAddDetail = (state, id) =>
  getAddsState(state).find((add) => add.id === Number(id));

*/

export const getAddState = (id) => (state) =>
  getAddsState(state).find((add) => add.id === id);

export const getUi = (state) => state.ui;
