import { useState, useEffect } from 'react'

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  
  useEffect(() => {
    const checkResponsive = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    
    // Check on mount
    checkResponsive()
    
    // Add event listener
    window.addEventListener('resize', checkResponsive)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkResponsive)
  }, [])
  
  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet }
}

