import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Else from './Else';
describe('Else.tsx', () => {
    it('should render without any errors or crash', () => {
        render(React.createElement(Else, null));
    });
    it('should render the passes children', () => {
        render(React.createElement(Else, null,
            React.createElement("div", { "data-testid": "element" }, "this is element")));
        expect(screen.getByTestId('element')).toBeInTheDocument();
    });
});
