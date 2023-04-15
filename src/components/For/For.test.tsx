import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import For from './For';

describe('For.tsx', () => {
   it('should render without any errors or crash', () => {
      render(<For>{(i) => <div key={i}>{i}</div>}</For>);
   });

   it('should run without children', () => {
      render(<For loop={2}></For>);
   });

   it('should render the children', () => {
      render(
         <For loop={2}>
            {(i) => (
               <div key={i} data-testid={i}>
                  {i}
               </div>
            )}
         </For>
      );

      expect(screen.getByText('0')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
   });

   it('should throw error if children is not function', () => {
      let error_msg;
      try {
         render(
            <For loop={2}>
               {/* @ts-ignore */}
               <div>this is div</div>
            </For>
         );
      } catch (err) {
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
            <For loop={'this_is_invalid'}>{(i) => <div key={i}></div>}</For>
         );
      } catch (err) {
         /* @ts-ignore */
         error_msg = err.message;
      }
      let expected_error_msg = 'Invalid value provied for the "loop" prop';
      expect(error_msg).toBe(expected_error_msg);
   });
});
