const promiseMiddleware = store => next => promiseAction => {
    if (promiseAction instanceof Promise) {
        promiseAction
            .then(action => next(action));
    } else {
        return next(promiseAction);
    }
}

export default promiseMiddleware;