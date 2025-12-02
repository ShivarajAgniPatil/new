export default function Home() {
  return (
    <div style={pageStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <div style={logoStyle}>
            CYANOPY
          </div>
          <div style={navLinksStyle}>
            <a href="/" style={{ ...navLinkStyle, color: '#6366f1', fontWeight: 600 }}>Home</a>
            <a href="/programs" style={navLinkStyle}>Programs</a>
            <a href="/about" style={navLinkStyle}>About</a>
            <a href="/global" style={navLinkStyle}>Global</a>
            <a href="/contact" style={navLinkStyle}>Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section style={heroSection}>
        <div style={heroContent}>
          <div style={badgeStyle}>Indian AI Startup</div>
          <h1 style={heroTitle}>
            Designing & Creating
            <br />
            <span style={gradientText}>AI Tools</span> for Services
          </h1>
          <p style={heroDescription}>
            We design and create innovative AI tools for various services. 
            Join our internship program to work on real AI projects and gain hands-on experience.
          </p>
          <div style={buttonGroup}>
            <a href="/programs" style={primaryButton}>View AI Tools</a>
            <a href="/contact" style={secondaryButton}>Apply for Internship</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={statsSection}>
        <div style={statsContainer}>
          <div style={statItem}>
            <div style={statNumber}>50+</div>
            <div style={statLabel}>AI Tools Created</div>
          </div>
          <div style={statItem}>
            <div style={statNumber}>100+</div>
            <div style={statLabel}>Interns Trained</div>
          </div>
          <div style={statItem}>
            <div style={statNumber}>🇮🇳</div>
            <div style={statLabel}>Made in India</div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Modern Styles
const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
}

const navStyle = {
  position: 'sticky',
  top: 0,
  background: '#ffffff',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  padding: '1rem 0'
}

const navContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}

const navLinksStyle = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center'
}

const navLinkStyle = {
  color: '#475569',
  textDecoration: 'none',
  fontSize: '0.95rem',
  transition: 'color 0.2s ease',
  fontWeight: 500
}

const heroSection = {
  padding: '6rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto'
}

const heroContent = {
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto'
}

const badgeStyle = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  color: '#ffffff',
  borderRadius: '50px',
  fontSize: '0.875rem',
  fontWeight: 600,
  marginBottom: '2rem'
}

const heroTitle = {
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 800,
  lineHeight: 1.2,
  color: '#1e293b',
  marginBottom: '1.5rem',
  letterSpacing: '-0.02em'
}

const gradientText = {
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}

const heroDescription = {
  fontSize: '1.25rem',
  color: '#64748b',
  lineHeight: 1.7,
  marginBottom: '2.5rem',
  maxWidth: '600px',
  margin: '0 auto 2.5rem'
}

const buttonGroup = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const primaryButton = {
  padding: '0.875rem 2rem',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  color: '#ffffff',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  display: 'inline-block',
  boxShadow: '0 4px 6px rgba(99, 102, 241, 0.3)'
}

const secondaryButton = {
  padding: '0.875rem 2rem',
  background: '#ffffff',
  color: '#6366f1',
  border: '2px solid #6366f1',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  transition: 'all 0.2s ease',
  display: 'inline-block'
}

const statsSection = {
  padding: '4rem 2rem',
  background: '#ffffff',
  borderTop: '1px solid #e2e8f0'
}

const statsContainer = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3rem'
}

const statItem = {
  textAlign: 'center'
}

const statNumber = {
  fontSize: '3rem',
  fontWeight: 800,
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '0.5rem'
}

const statLabel = {
  fontSize: '1rem',
  color: '#64748b',
  fontWeight: 500
}
