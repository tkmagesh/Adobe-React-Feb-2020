import bugApi from '../services/bugApi';

function toggle(bugToToggle) {
    return function(dispatch){
        const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        bugApi
            .save(toggledBugData)
            .then(toggledBug => {
                const action = { type: 'UPDATE_BUG', payload: toggledBug };
                dispatch(action);
            });
        
    }
}
export default toggle;