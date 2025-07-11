import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal-on-scroll')
    const galleryEls = document.querySelectorAll('.gallery-fade-in')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.13 }
    )

    revealEls.forEach(el => observer.observe(el))
    galleryEls.forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])
}

export default useScrollAnimation 