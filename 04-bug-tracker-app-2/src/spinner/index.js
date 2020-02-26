import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import spinnerActionCreators from './actions';
import filterActionCreators from '../filter/actions';

const Spinner = ({ value, up, down, applyFilter }) => {
    let [delta, setDelta] = useState(0);
    return (
        <div>
            <label>Delta : </label>
            <input type="number" value={delta} onChange={evt => setDelta(evt.target.valueAsNumber || 0)} />
            <br />
            <input type="button" value="Down" onClick={() => down(delta)} />
            <span> [ {value} ] </span>
            <input type="button" value="Up" onClick={() => up(delta)} />
            <hr/>
            <div>
                <label>Apply Filter : </label>
                <input type="checkbox" onChange={ evt => applyFilter(evt.target.checked)} />
            </div>
        </div>
    );
};

function mapStateToProps(storeState){
    const value = storeState.spinnerState;
    return { value : value };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    const filterActionDispatchers = bindActionCreators(filterActionCreators, dispatch);
    return { ...spinnerActionDispatchers, ...filterActionDispatchers };
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);