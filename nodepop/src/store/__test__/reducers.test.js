import {
  addsDetail,
  adds_created_completed,
  adds_deleted_completed,
  adds_loaded_completed,
  auth_login_completed,
  auth_logout,
  tags_loaded_completed,
} from "../actions";
import { adds, auth, defaultState, tags, ui } from "../reducers";

describe("auth", () => {
  const state = defaultState.auth;
  test('should manage "AUTH_LOGIN_COMPLETED"', () => {
    const action = auth_login_completed();
    expect(auth(state, action)).toBe(true);
  });
  test('should manage "AUTH_LOGOUT"', () => {
    const action = auth_logout();
    expect(auth(state, action)).toBe(false);
  });
  test('shoul return "state" to any action', () => {
    const action = {
      type: "any",
    };
    expect(auth(state, action)).toBe(state);
  });
});

describe("tags", () => {
  const state = defaultState.tags;
  test('should manage "TAGS_LOADED_COMPLETED"', () => {
    const tagsList = "tags";
    const action = tags_loaded_completed(tagsList);
    expect(tags(state, action)).toBe(tagsList);
  });
  test('should return "state" to any action', () => {
    const action = {
      type: "any",
    };
    expect(tags(state, action)).toBe(state);
  });
});

describe("adds", () => {
  const state = defaultState.adds;
  const data = "add/s";

  test('should manage "ADDS_LOADED_COMPLETED"', () => {
    const action = adds_loaded_completed(data);
    expect(adds(state, action)).toEqual({ ...state, loaded: true, data: data });
  });
  test('should manage "ADDS_DETAIL"', () => {
    const action = addsDetail(data);
    expect(adds(state, action)).toEqual({ ...state, data: [data] });
  });
  test('should manage "ADDS_CREATED_COMPLETED"', () => {
    const action = adds_created_completed(data);
    expect(adds(state, action)).toEqual({
      ...state,
      data: [data, ...state.data],
    });
  });
  test('should manage "ADDS_DELETED_COMPLETED"', () => {
    const action = adds_deleted_completed(data);
    const filterData = state.data.filter((add) => add.id !== action.data.id);
    expect(adds(state, action)).toEqual({ ...state, data: filterData });
  });
  test("should return state to any action", () => {
    const action = {
      type: "any",
    };
    expect(adds(state, action)).toEqual(state);
  });
});

describe("ui", () => {
  const state = defaultState.ui;
  const error = "error";

  test("should manage actions.error", () => {
    const action = {
      type: "any",
      error: true,
      payload: error,
    };
    expect(ui(state, action)).toEqual({
      ...state,
      pending: false,
      error: error,
    });
  });
  test('should manage actions.type that ends with "/pending"', () => {
    const action = {
      type: "/pending",
    };
    expect(ui(state, action)).toEqual({ ...state, pending: true });
  });
  test('should manage actions.type that ends with "/completed"', () => {
    const action = {
      type: "/completed",
    };
    expect(ui(state, action)).toEqual({
      ...state,
      pending: false,
      error: null,
    });
  });
  test('should manage actions.type that same as "UI_RESET_ERROR"', () => {
    const action = {
      type: "UI_RESET_ERROR",
    };
    expect(ui(state, action)).toEqual({ ...state, error: null });
  });
  test("should return state to any action", () => {
    const action = {
      type: "any",
    };
    expect(ui(state, action)).toEqual(state);
  });
});
