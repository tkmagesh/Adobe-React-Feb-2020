import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/BugStats';
import BugList from './views/BugList';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';

import bugActionCreators from './actions';

class BugTracker extends Component {
    state = {
        dummy : 100
    };
    componentWillMount(){

    }
    componentDidMount(){
        this.props.load();
    }
    componentWillUnmount(){

    }
    shouldComponentUpdate(props, state){
        return false;
    }
    render = () => {
        const { bugs, addNew, toggle, removeClosed} = this.props;
        return (
            <Fragment>
                <BugStats bugs={bugs} />
               {/*  <hr/>
                <input type="button" value= 'LOAD BUGS' onClick={load} />
                <hr/> */}
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, removeClosed }} />
                {/* <BugList /> */}
            </Fragment>
        )
    }
}

//extracting data
function mapStateToProps(storeState){
    const { bugsState : bugs, filterState, spinnerState } = storeState;
    if (filterState){
        return { bugs : bugs.filter(bug => bug.id % 2 === spinnerState % 2)}
    } else {
        return { bugs : bugs };
    }
}

//using dispatch for the component
function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);