import React, { useEffect, useRef, useState } from 'react'

// Lightweight scroll reveal wrapper using IntersectionObserver
// Adds a subtle fade + translate when the element first enters the viewport.
const hiddenByDirection = {
  up: 'opacity-0 translate-y-4',
  down: 'opacity-0 -translate-y-4',
  left: 'opacity-0 -translate-x-4',
  right: 'opacity-0 translate-x-4',
  none: 'opacity-0',
}

const RevealOnScroll = ({
  as: Component = 'div',
  from = 'up',
  delayClass = '',
  className = '',
  children,
}) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const hidden = hiddenByDirection[from] || hiddenByDirection.up
  const visibleCls = 'opacity-100 translate-y-0 translate-x-0'

  return (
    <Component
      ref={ref}
      className={`${className} transition-all duration-500 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? visibleCls : hidden
      } ${visible ? delayClass : ''}`}
    >
      {children}
    </Component>
  )
}

export default RevealOnScroll

