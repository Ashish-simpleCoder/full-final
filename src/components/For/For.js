import React from 'react';
export default function For({ loop = 0, children = null, }) {
    if (typeof children != 'function' && children !== null) {
        throw new Error('Children type must be a function');
    }
    if (Number.isNaN(Number(loop))) {
        throw new Error('Invalid value provied for the "loop" prop');
    }
    if (children === null) {
        return React.createElement(React.Fragment, null);
    }
    return React.createElement(Elements, { parentChildren: children, loop: loop });
}
function Elements({ parentChildren, loop }) {
    let arr = [];
    for (let i = 0; i < Number(loop); i++) {
        const element = parentChildren(i);
        arr.push(element);
    }
    return React.createElement(React.Fragment, null, arr);
}
