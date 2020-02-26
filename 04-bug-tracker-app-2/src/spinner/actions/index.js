const spinnerActionCreators = {
    up(delta) {
        const action = { type: 'UP', payload: delta };
        return action;
    },
    down(delta) {
        const action = { type: 'DOWN', payload: delta };
        return action;
    }
}

export default spinnerActionCreators;