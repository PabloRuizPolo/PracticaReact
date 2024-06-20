import {
  addsDetail,
  adds_loaded_completed,
  adds_loaded_pending,
  adds_loaded_rejected,
  auth_login_completed,
  auth_login_pending,
  auth_login_rejected,
  auth_logout,
} from "../actions";
import {
  ADDS_DETAIL,
  ADDS_LOADED_COMPLETED,
  ADDS_LOADED_PENDING,
  ADDS_LOADED_REJECTED,
  AUTH_LOGIN_COMPLETED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
} from "../types";

describe("auth_login_", () => {
  test("auth_login_pending should return action: AUTH_LOGIN_PENDING", () => {
    const toBeAction = {
      type: AUTH_LOGIN_PENDING,
    };
    const action = auth_login_pending();
    expect(action).toEqual(toBeAction);
  });
  test("auth_login_completed should return action: AUTH_LOGIN_COMPLETED", () => {
    const toBeAction = {
      type: AUTH_LOGIN_COMPLETED,
    };
    const action = auth_login_completed();
    expect(action).toEqual(toBeAction);
  });
  test("auth_login_rejected should return action: AUTH_LOGIN_REJECTED", () => {
    const error = "error";
    const toBeAction = {
      type: AUTH_LOGIN_REJECTED,
      payload: error,
      error: true,
    };
    const action = auth_login_rejected(error);
    expect(action).toEqual(toBeAction);
  });
});

describe("auth_logout", () => {
  test("should return an action: AUTH_LOGOUT", () => {
    const toBeAction = {
      type: AUTH_LOGOUT,
    };
    const action = auth_logout();
    expect(action).toEqual(toBeAction);
  });
});

describe("adds_loaded_", () => {
  test("adds_loaded_pending should return action: ADDS_LOADED_PENDING", () => {
    const toBeAction = {
      type: ADDS_LOADED_PENDING,
    };
    const action = adds_loaded_pending();
    expect(action).toEqual(toBeAction);
  });
  test("adds_loaded_completed should return action: ADDS_LOADED_COMPLETED", () => {
    const adds = "adds";
    const toBeAction = {
      type: ADDS_LOADED_COMPLETED,
      payload: adds,
    };
    const action = adds_loaded_completed(adds);
    expect(action).toEqual(toBeAction);
  });
  test("adds_loaded_rejected should return action: ADDS_LOADED_REJECTED", () => {
    const error = "error";
    const toBeAction = {
      type: ADDS_LOADED_REJECTED,
      payload: error,
      error: true,
    };
    const action = adds_loaded_rejected(error);
    expect(action).toEqual(toBeAction);
  });
});

describe("addsDetail", () => {
  test("should return an action: ADDS_DETAIL", () => {
    const add = "add";
    const toBeAction = {
      type: ADDS_DETAIL,
      payload: add,
    };
    const action = addsDetail(add);
    expect(action).toEqual(toBeAction);
  });
});
