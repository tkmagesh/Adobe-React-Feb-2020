import bugApi from '../services/bugApi';

function removeClosed() {
    return function(dispatch, getState){
        const bugs = getState().bugsState;
        const bugsToRemove = bugs.filter(bug => bug.isClosed);
        bugsToRemove
            .forEach(closedBug => {
                bugApi
                    .remove(closedBug)
                    .then(_ => {
                        const action = { type: 'REMOVE_BUG', payload: closedBug };
                        dispatch(action);
                    })
            })
    };
    
}
export default removeClosed;