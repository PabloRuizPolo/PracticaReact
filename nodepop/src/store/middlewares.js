export function errorsMiddlewares(router, routesList) {
  return function (store) {
    return function (next) {
      return function (action) {
        const result = next(action);

        if (!action.error) {
          return result;
        }

        const go = routesList[action.payload.status];
        if (go) {
          router.navigate(go);
        }

        return result;
      };
    };
  };
}
