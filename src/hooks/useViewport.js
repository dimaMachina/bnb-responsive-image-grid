import { useState, useEffect } from 'react'

const viewports = {
  'extra-large': 1200,
  'large': 992,
  'medium': 768,
  'small': 576,
  'extra-small': 0
}

// SSR check
const getViewport = () => process.browser
  ? Object.entries(viewports).find(([name, px]) => window.innerWidth > px)[0]
  : 'extra-large'

export const useViewport = () => {
  const [viewport, setViewport] = useState(getViewport())

  useEffect(() => {
    const handleResize = () => {
      const newViewport = getViewport()
      if (newViewport !== viewport) {
        setViewport(newViewport)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [viewport])

  return viewport
}
