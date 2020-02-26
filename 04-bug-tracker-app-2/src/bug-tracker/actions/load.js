import bugApi from '../services/bugApi';

function load(){
    return function(dispatch){
        bugApi
            .getAllBugs()
            .then(function(bugs){
                const action = { type: 'LOAD_BUGS', payload: bugs };
                dispatch(action);
            });
    }
}

export default load;