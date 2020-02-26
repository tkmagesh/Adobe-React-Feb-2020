function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW_BUG') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'UPDATE_BUG') {
        const updatedBug = action.payload;
        const newState = currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug);
        return newState;
    }
    if (action.type === 'REMOVE_BUGS') {
        const bugsToRemove = action.payload;
        const newState = currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const bugToRemove = action.payload;
        const newState = currentState.filter(bug => bugToRemove.id !== bug.id);
        return newState;
    }
    if (action.type === 'LOAD_BUGS'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;