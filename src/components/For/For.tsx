import React from 'react';

export default function For({
   loop = 0,
   children = null,
}: {
   children?: ((i: number) => JSX.Element) | null;
   loop?: number;
}) {
   if (typeof children != 'function' && children !== null) {
      throw new Error('Children type must be a function');
   }
   if (Number.isNaN(Number(loop))) {
      throw new Error('Invalid value provied for the "loop" prop');
   }

   if (children === null) {
      return <></>;
   }

   return <Elements parentChildren={children} loop={loop} />;
}

function Elements({ parentChildren, loop }: { parentChildren: (i: number) => JSX.Element; loop: number }) {
   let arr = [];
   for (let i = 0; i < Number(loop); i++) {
      const element = parentChildren(i);
      arr.push(element);
   }

   return <>{arr}</>;
}
