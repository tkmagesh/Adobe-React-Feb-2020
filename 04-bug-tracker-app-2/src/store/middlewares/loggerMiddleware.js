function loggerMiddleware(store) {
    return function (next) {
        return function (action) {
            console.group(action.type);
            console.log(action);
            console.group('BEFORE');
            console.log(store.getState());
            console.groupEnd();
            next(action);
            console.group('AFTER');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
}

export default loggerMiddleware;