import { defaultState } from "../reducers";
import { getAddState, getAddsState, getIsLogged } from "../selectors";

describe("getAddState", () => {
  const id = "1";
  const add = [{ id: id }];
  const state = {
    adds: { data: add },
  };
  test("should return an add based on the id", () => {
    expect(getAddState(id)(state)).toBe(add[0]);
  });
  test("should return undefined when add.id does not exist", () => {
    expect(getAddState(5)(state)).toBeUndefined();
  });
});

describe("getIsLogged", () => {
  test("should return true when logged", () => {
    const state = { auth: true };
    expect(getIsLogged(state)).toBe(true);
  });
  test("should return false when unLogged", () => {
    const state = { auth: false };
    expect(getIsLogged(state)).toBe(false);
  });
});

describe("getAddsState", () => {
  const add = "adds";
  const state = {
    adds: {
      data: [add],
    },
  };
  test('should return "data: adds"', () => {
    expect(getAddsState(state)).toEqual([add]);
  });
});
