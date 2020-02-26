import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import spinnerActionCreators from './actions';

const Spinner = ({ value, up, down }) => {
    let [delta, setDelta] = useState(0);
    return (
        <div>
            <label>Delta : </label>
            <input type="number" value={delta} onChange={evt => setDelta(evt.target.valueAsNumber || 0)} />
            <br />
            <input type="button" value="Down" onClick={() => down(delta)} />
            <span> [ {value} ] </span>
            <input type="button" value="Up" onClick={() => up(delta)} />
        </div>
    );
};

function mapStateToProps(storeState){
    const value = storeState.spinnerState;
    return { value : value };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);