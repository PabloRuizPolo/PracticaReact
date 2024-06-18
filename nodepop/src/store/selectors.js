export const getIsLogged = (state) => state.auth;

export const getAddsState = (state) => state.adds.data;
export const getAddLoaded = (state) => state.adds.loaded;

/*export const getAdd = (state, addId) =>
  getAddsState(state).find((add) => Number(addId) === add.id);
*/
export const getAddState = (addId) => (state) =>
  getAddsState(state).find((add) => add.id === Number(addId));

export const getUi = (state) => state.ui;
