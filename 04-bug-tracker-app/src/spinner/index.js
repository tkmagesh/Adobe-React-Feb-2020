import React, { useState } from 'react';

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

export default Spinner;