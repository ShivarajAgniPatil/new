// Responsive utility functions for mobile-first design

export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768
  }
  return false
}

export const isTablet = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > 768 && window.innerWidth <= 1024
  }
  return false
}

export const responsive = {
  // Container padding
  containerPadding: {
    padding: '0 2rem',
    '@media (max-width: 768px)': {
      padding: '0 1.5rem'
    },
    '@media (max-width: 480px)': {
      padding: '0 1rem'
    }
  },
  
  // Navigation styles
  navContainer: (isMobile) => ({
    maxWidth: '1800px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0 4rem',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? '1rem' : '0'
  }),
  
  navLinks: (isMobile) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1rem' : '3rem',
    fontFamily: 'monospace',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    letterSpacing: '2px',
    width: isMobile ? '100%' : 'auto',
    textAlign: isMobile ? 'center' : 'left'
  }),
  
  // Hero styles
  heroTitle: (isMobile) => ({
    fontSize: isMobile ? '2rem' : '5.5rem',
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: '0',
    letterSpacing: isMobile ? '2px' : '5px',
    fontFamily: 'monospace',
    color: '#fff',
    textTransform: 'uppercase',
    textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
  }),
  
  heroSubtitle: (isMobile) => ({
    fontSize: isMobile ? '0.9rem' : '1.2rem',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: isMobile ? '2rem' : '4rem',
    maxWidth: '1000px',
    lineHeight: isMobile ? 1.6 : 2,
    fontFamily: 'monospace',
    letterSpacing: '1px'
  }),
  
  // Button styles
  ctaButtons: (isMobile) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1rem' : '2rem',
    marginBottom: isMobile ? '3rem' : '5rem',
    width: isMobile ? '100%' : 'auto'
  }),
  
  button: (isMobile) => ({
    padding: isMobile ? '1rem 2rem' : '1.5rem 3rem',
    fontSize: isMobile ? '0.9rem' : '1rem',
    width: isMobile ? '100%' : 'auto'
  }),
  
  // Grid styles
  statsGrid: (isMobile) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: isMobile ? '1.5rem' : '3rem',
    maxWidth: '1000px',
    width: '100%'
  }),
  
  // Content padding
  contentPadding: (isMobile) => ({
    padding: isMobile ? '0 1rem' : '0 4rem'
  }),
  
  // Section title
  sectionTitle: (isMobile) => ({
    fontSize: isMobile ? '2rem' : '3.5rem',
    fontWeight: 900,
    marginBottom: isMobile ? '1.5rem' : '3rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#fff',
    textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
  }),
  
  // Card grid
  cardGrid: (isMobile) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: isMobile ? '2rem' : '3rem'
  })
}

