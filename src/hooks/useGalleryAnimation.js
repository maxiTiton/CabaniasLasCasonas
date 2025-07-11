import { useEffect } from 'react'

export const useGalleryAnimation = (filteredImages) => {
  useEffect(() => {
    const items = document.querySelectorAll('.gallery-item')

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.13
    })

    items.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [filteredImages])
}

export default useGalleryAnimation 