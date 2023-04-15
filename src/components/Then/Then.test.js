import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Then from './Then';
describe('Then.tsx', () => {
    it('should render without any errors or crash', () => {
        render(React.createElement(Then, null));
    });
    it('should render the passes children', () => {
        render(React.createElement(Then, null,
            React.createElement("div", { "data-testid": "element" }, "this is element")));
        expect(screen.getByTestId('element')).toBeInTheDocument();
    });
});
