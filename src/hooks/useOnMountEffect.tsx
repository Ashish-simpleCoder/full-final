import React from 'react'

export default function useOnMountEffect(cb: () => (() => void) | void) {
   React.useEffect(cb, [])
}
