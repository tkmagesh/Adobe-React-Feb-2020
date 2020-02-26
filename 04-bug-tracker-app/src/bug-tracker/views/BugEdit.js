import React from 'react';

const BugEdit = ({ addNew }) => {
    const [newBugName, setNewBugName] = React.useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text"
                value={newBugName}
                onChange={evt => setNewBugName(evt.target.value)} />
            <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
        </section>
    )
}

export default BugEdit;
