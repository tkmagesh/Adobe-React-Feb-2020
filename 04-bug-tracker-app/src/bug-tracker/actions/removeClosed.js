function removeClosed(bugs) {
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_BUGS', payload: bugsToRemove };
    return action;
}
export default removeClosed;