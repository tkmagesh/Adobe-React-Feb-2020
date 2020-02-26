import React from 'react';
import BugItem from './BugItem';

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

export default BugList;