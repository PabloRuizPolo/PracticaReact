export const getIsLogged = (state) => state.auth;

export const getAddsState = (state) => state.adds.data;
export const getAddLoaded = (state) => state.adds.loaded;

export const getAddState = (id) => (state) =>
  getAddsState(state).find((add) => add.id === id);

export const getTagsState = (state) => state.tags;

export const getUi = (state) => state.ui;
