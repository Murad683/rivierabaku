import React, { useEffect, useState } from 'react'

const PageFade = ({ children }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={`transition-all duration-[400ms] motion-reduce:transition-none ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
      }`}
    >
      {children}
    </div>
  )
}

export default PageFade
