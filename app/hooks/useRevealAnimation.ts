'use client'

import { useEffect } from 'react'

export function useRevealAnimation() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      })

      revealElements.forEach((element) => {
        revealObserver.observe(element)
      })

      return () => {
        revealElements.forEach((element) => {
          revealObserver.unobserve(element)
        })
      }
    } else {
      revealElements.forEach((element) => {
        element.classList.add('is-visible')
      })
    }
  }, [])
}
