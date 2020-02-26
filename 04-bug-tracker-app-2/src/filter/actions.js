var filterActionCreators = {
    applyFilter(toApply){
        const action = { type : 'APPLY_FILTER', payload : toApply};
        return action;
    }
}

export default filterActionCreators;