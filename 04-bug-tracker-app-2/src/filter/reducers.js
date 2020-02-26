function filterReducer(currentState = false, action){
    if (action.type === 'APPLY_FILTER'){
        return action.payload;
    }
    return currentState;
}

export default filterReducer;