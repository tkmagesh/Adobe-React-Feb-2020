import React, { Component, Fragment } from 'react';
import BugStats from './views/BugStats';
import BugList from './views/BugList';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';

class BugTracker extends Component {
    render = () => {
        const { bugs, addNew, toggle, removeClosed } = this.props;
        return (
            <Fragment>
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, removeClosed }} />
            </Fragment>
        )
    }
}

export default BugTracker;