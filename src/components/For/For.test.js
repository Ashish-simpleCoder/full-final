import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import For from './For';
describe('For.tsx', () => {
    it('should render without any errors or crash', () => {
        render(React.createElement(For, null, (i) => React.createElement("div", { key: i }, i)));
    });
    it('should run without children', () => {
        render(React.createElement(For, { loop: 2 }));
    });
    it('should render the children', () => {
        render(React.createElement(For, { loop: 2 }, (i) => (React.createElement("div", { key: i, "data-testid": i }, i))));
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });
    it('should throw error if children is not function', () => {
        let error_msg;
        try {
            render(React.createElement(For, { loop: 2 },
                React.createElement("div", null, "this is div")));
        }
        catch (err) {
            /* @ts-ignore */
            error_msg = err.message;
        }
        let expected_error_msg = 'Children type must be a function';
        expect(error_msg).toBe(expected_error_msg);
    });
    it('should throw error if loop prop is NaN', () => {
        let error_msg;
        try {
            render(
            /* @ts-ignore */
            React.createElement(For, { loop: 'this_is_invalid' }, (i) => React.createElement("div", { key: i })));
        }
        catch (err) {
            /* @ts-ignore */
            error_msg = err.message;
        }
        let expected_error_msg = 'Invalid value provied for the "loop" prop';
        expect(error_msg).toBe(expected_error_msg);
    });
});
