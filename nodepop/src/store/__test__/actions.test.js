import {
  addsDetail,
  addsLoad,
  adds_created_completed,
  adds_created_pending,
  adds_created_rejected,
  adds_loaded_completed,
  adds_loaded_pending,
  adds_loaded_rejected,
  authLogin,
  auth_login_completed,
  auth_login_pending,
  auth_login_rejected,
  auth_logout,
  createdAdd,
} from "../actions";
import { getAddLoaded } from "../selectors";
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

describe("authLogin", () => {
  const credentials = " credentials";
  const action = authLogin(credentials);
  const dispatch = jest.fn();
  const navigateTo = "navigateTo";

  const services = { auth: {} };
  const router = {
    state: { location: { state: { from: navigateTo } } },
    navigate: jest.fn(),
  };

  test("when login resolves should continue with the loginFlow", async () => {
    services.auth.login = jest.fn().mockResolvedValue();
    await action(dispatch, undefined, { services, router });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, auth_login_pending());
    expect(dispatch).toHaveBeenNthCalledWith(2, auth_login_completed());
    expect(router.navigate).toHaveBeenCalledWith(navigateTo, { replace: true });
    expect(services.auth.login).toHaveBeenCalledWith(credentials);
  });
  test("when login reject should continue with the errorFlow", async () => {
    const error = new Error("error");
    services.auth.login = jest.fn().mockRejectedValue(error);
    await action(dispatch, undefined, { services, router });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, auth_login_pending());
    expect(dispatch).toHaveBeenNthCalledWith(2, auth_login_rejected(error));
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

describe("createAdd", () => {
  const add = "add";
  const newAdd = { id: 1, ...add };
  const action = createdAdd(add);
  const dispatch = jest.fn();
  const services = { adds: { postAdds: jest.fn() } };
  const router = { navigate: jest.fn() };
  const navigateTo = `/adverts/${newAdd.id}`;

  test("when createAdee resolve should continue with createAdd flow", async () => {
    services.adds.postAdds = jest.fn().mockResolvedValue(newAdd);
    const returnedAdd = await action(dispatch, undefined, { services, router });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, adds_created_pending());
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      adds_created_completed(returnedAdd)
    );
    expect(returnedAdd).toEqual(newAdd);
    expect(router.navigate).toHaveBeenCalledWith(navigateTo);
  });
  test("when createAdee rejected should continue with error flow", async () => {
    const error = new Error("error");
    services.adds.postAdds = jest.fn().mockRejectedValue(error);
    await action(dispatch, undefined, { services, router });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, adds_created_pending());
    expect(dispatch).toHaveBeenNthCalledWith(2, adds_created_rejected(error));
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

/*
describe("addsLoad", () => {
  const action = addsLoad();
  const state = {
    adds: {
      loaded: false,
    },
  };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { adds: {} };

  test("when addsLoad resolves should continue with addLoad flow", async () => {
    services.adds.getAdds = jest.fn().mockResolvedValue();
    getAddLoaded(state);
    await action(dispatch, getState, { services });

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
  test("when addsLoad reject should continue with Error flow", () => {});
});
/*/

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
