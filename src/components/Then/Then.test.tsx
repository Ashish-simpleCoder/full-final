import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Then from './Then';

describe('Then.tsx', () => {
   it('should render without any errors or crash', () => {
      render(<Then></Then>);
   });
   it('should render the passes children', () => {
      render(
         <Then>
            <div data-testid="element">this is element</div>
         </Then>
      );
      expect(screen.getByTestId('element')).toBeInTheDocument();
   });
});
