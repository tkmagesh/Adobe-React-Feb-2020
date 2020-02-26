import React from 'react';
import BugItem from './BugItem';
import bugActionCreators from '../actions';
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.5/node_modules/redux';
import { connect } from 'react-redux';

const BugList = ({ bugs, toggle, removeClosed }) => {
    const bugItems = bugs.map(bug => (
        <BugItem key={bug.id} {...{ bug, toggle }} />
    ));
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)} />
        </section>
    )
}

function mapStateToProps(storeState){
    return { bugs : storeState.bugsState };
}

function mapDispatchToProps(dispatch){
    const { toggle, removeClosed} = bindActionCreators(bugActionCreators, dispatch);
    return { toggle, removeClosed };
}

export default connect(mapStateToProps, mapDispatchToProps)(BugList);