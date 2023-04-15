import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Else from './Else';

describe('Else.tsx', () => {
   it('should render without any errors or crash', () => {
      render(<Else></Else>);
   });
   it('should render the passes children', () => {
      render(
         <Else>
            <div data-testid="element">this is element</div>
         </Else>
      );
      expect(screen.getByTestId('element')).toBeInTheDocument();
   });
});
