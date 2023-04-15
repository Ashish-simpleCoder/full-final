import React, { Suspense } from 'react';
export default function If({ condition = false, children = null, suspense, fallback = React.createElement(React.Fragment, null), }) {
    const conditionNegation = !!condition;
    const isArray = Array.isArray(children);
    if (isArray) {
        if (conditionNegation && suspense)
            return React.createElement(Suspense, { fallback: fallback }, children[0]);
        if (conditionNegation)
            return React.createElement(React.Fragment, null, children[0]);
        // if false then return children present after the array[0] index
        return React.createElement(React.Fragment, null, children.slice(1));
    }
    if (conditionNegation && suspense)
        return React.createElement(Suspense, { fallback: fallback }, children);
    if (conditionNegation)
        return React.createElement(React.Fragment, null, children);
    return null;
}
