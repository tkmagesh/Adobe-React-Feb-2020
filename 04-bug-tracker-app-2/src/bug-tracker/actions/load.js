function getBugs(){
    const existingBugs = [
        {id : 1, name : 'Dummy Bug - 1', isClosed : false, createdAt : new Date() },
        { id: 2, name: 'Dummy Bug - 2', isClosed: false, createdAt : new Date() },
        { id: 3, name: 'Dummy Bug - 3', isClosed: false , createdAt : new Date()},
    ];
    return existingBugs;
}
function load(){
    const bugs = getBugs();
    const action = { type : 'LOAD_BUGS', payload : bugs };
    return action;
}

export default load;