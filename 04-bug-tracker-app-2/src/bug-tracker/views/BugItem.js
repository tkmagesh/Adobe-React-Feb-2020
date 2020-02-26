import React from 'react';

const BugItem = ({ bug, toggle }) => (
    <li>
        <span
            className={'bugname ' + (bug.isClosed ? 'closed' : '')}
            onClick={() => toggle(bug)}
        >{bug.name}</span>
        <div className="datetime">{bug.createdAt.toString()}</div>
        <div> [ {bug.id} ] </div>
    </li>
);

export default BugItem;