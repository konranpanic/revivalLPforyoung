import * as React from 'react'

const MOBILE_BREAKPOINT = 768

function getIsMobile() {
  return (
    typeof window !== 'undefined' &&
    window.innerWidth < MOBILE_BREAKPOINT
  )
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const mql = window.matchMedia(
    `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
  )
  const listener = () => callback()

  mql.addEventListener('change', listener)
  return () => {
    mql.removeEventListener('change', listener)
  }
}

export function useIsMobile() {
  const isMobile = React.useSyncExternalStore(
    subscribe,
    getIsMobile,
    () => false,
  )

  return !!isMobile
}
