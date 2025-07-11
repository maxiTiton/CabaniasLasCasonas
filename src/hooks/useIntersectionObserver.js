import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.13, ...options }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return [elementRef, isIntersecting]
}

export default useIntersectionObserver 