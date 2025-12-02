import { useState } from 'react'

export default function Global() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  
  const globalStats = [
    {
      title: 'AI Tools',
      value: '50+',
      subtitle: 'Created',
      description: 'AI tools designed for various services'
    },
    {
      title: 'Interns',
      value: '100+',
      subtitle: 'Active',
      description: 'Interns working on AI projects'
    },
    {
      title: 'Indian Offices',
      value: '3',
      subtitle: 'Cities',
      description: 'Mumbai, Delhi, Bangalore'
    },
    {
      title: 'Made in India',
      value: '🇮🇳',
      subtitle: 'Proud',
      description: 'Indian startup with global vision'
    }
  ]
  
  const locations = [
    {
      city: 'Mumbai',
      country: 'India',
      flag: '🇮🇳',
      timezone: 'IST',
      students: '50+',
      programs: 'AI Tools & Internships',
      status: 'Headquarters',
      color: '#6366f1'
    },
    {
      city: 'New Delhi',
      country: 'India',
      flag: '🇮🇳',
      timezone: 'IST',
      students: '30+',
      programs: 'AI Development',
      status: 'Active',
      color: '#8b5cf6'
    },
    {
      city: 'Bangalore',
      country: 'India',
      flag: '🇮🇳',
      timezone: 'IST',
      students: '40+',
      programs: 'AI Innovation',
      status: 'Active',
      color: '#ec4899'
    }
  ]
  
  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>CYANOPY</a>
          <div style={navLinksStyle}>
            <a href="/" style={navLinkStyle}>Home</a>
            <a href="/programs" style={navLinkStyle}>Programs</a>
            <a href="/about" style={navLinkStyle}>About</a>
            <a href="/global" style={{ ...navLinkStyle, color: '#6366f1', fontWeight: 600 }}>Global</a>
            <a href="/contact" style={navLinkStyle}>Contact</a>
          </div>
        </div>
      </nav>
      
      <section style={contentSection}>
        <div style={container}>
          <div style={header}>
            <div style={badge}>Indian Startup | Global Reach</div>
            <h1 style={title}>
              Made in <span style={gradientText}>India</span> | Global Impact
            </h1>
            <p style={description}>
              Indian-based startup creating AI tools for services worldwide
            </p>
          </div>
          
          {/* Stats Grid */}
          <div style={statsGrid}>
            {globalStats.map((stat, index) => (
              <div key={index} style={statItem}>
                <div style={statIcon}>{stat.value}</div>
                <div style={statTitle}>{stat.title}</div>
                <div style={statSubtitle}>{stat.subtitle}</div>
                <div style={statDesc}>{stat.description}</div>
              </div>
            ))}
          </div>
          
          {/* Locations Section */}
          <div style={locationsSection}>
            <h2 style={sectionTitle}>Our Indian Offices</h2>
            <p style={sectionSubtitle}>
              Click on any location to explore our offices and internship opportunities
            </p>
            
            <div style={locationsList}>
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  style={{
                    ...locationItem,
                    borderLeft: `4px solid ${location.color}`
                  }}
                  onClick={() => {
                    setSelectedRegion(selectedRegion === location.city ? null : location.city)
                  }}
                >
                  <div style={locationHeader}>
                    <div style={flag}>{location.flag}</div>
                    <div style={{
                      ...statusBadge,
                      background: `${location.color}15`,
                      borderColor: location.color,
                      color: location.color
                    }}>
                      {location.status}
                    </div>
                  </div>
                  
                  <h3 style={cityName}>{location.city}</h3>
                  <p style={countryName}>{location.country}</p>
                  <p style={timezone}>🕐 {location.timezone}</p>
                  
                  <div style={locationStats}>
                    <div style={statItem}>
                      <div style={statNumber}>{location.students}</div>
                      <div style={statLabel}>Team Members</div>
                    </div>
                    <div style={statItem}>
                      <div style={statProgram}>{location.programs}</div>
                      <div style={statLabel}>Focus</div>
                    </div>
                  </div>
                  
                  {selectedRegion === location.city && (
                    <div style={expandInfo}>
                      <p style={expandText}>
                        Our {location.city} office focuses on {location.programs.toLowerCase()}. 
                        We offer internships and work on creating innovative AI tools for services.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Impact Section */}
          <div style={impactSection}>
            <h2 style={impactTitle}>Global Impact</h2>
            <div style={impactGrid}>
              <div style={impactItem}>
                <div style={impactIcon}>🤖</div>
                <h3 style={impactItemTitle}>AI Tools Created</h3>
                <p style={impactItemDesc}>
                  Over 50+ AI tools designed and deployed for various services
                </p>
              </div>
              <div style={impactItem}>
                <div style={impactIcon}>👥</div>
                <h3 style={impactItemTitle}>Interns Trained</h3>
                <p style={impactItemDesc}>
                  100+ interns gaining hands-on experience in AI development
                </p>
              </div>
              <div style={impactItem}>
                <div style={impactIcon}>🇮🇳</div>
                <h3 style={impactItemTitle}>Made in India</h3>
                <p style={impactItemDesc}>
                  Proudly Indian startup creating innovative AI solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Styles
const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
  backgroundClip: 'text',
  textDecoration: 'none'
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
  fontWeight: 500
}

const contentSection = {
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto'
}

const container = {
  maxWidth: '100%'
}

const header = {
  textAlign: 'center',
  marginBottom: '4rem'
}

const badge = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  color: '#ffffff',
  borderRadius: '50px',
  fontSize: '0.875rem',
  fontWeight: 600,
  marginBottom: '1.5rem'
}

const title = {
  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
  fontWeight: 800,
  color: '#1e293b',
  marginBottom: '1rem',
  lineHeight: 1.2
}

const gradientText = {
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}

const description = {
  fontSize: '1.125rem',
  color: '#64748b',
  lineHeight: 1.7,
  maxWidth: '700px',
  margin: '0 auto'
}

const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3rem',
  marginBottom: '4rem'
}

const statItem = {
  textAlign: 'center'
}

const statIcon = {
  fontSize: '3rem',
  marginBottom: '1rem'
}

const statTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '0.5rem'
}

const statSubtitle = {
  fontSize: '0.875rem',
  color: '#6366f1',
  fontWeight: 600,
  marginBottom: '0.5rem'
}

const statDesc = {
  fontSize: '0.875rem',
  color: '#64748b',
  lineHeight: 1.5
}

const locationsSection = {
  marginBottom: '4rem',
  paddingBottom: '4rem',
  borderBottom: '1px solid #e2e8f0'
}

const sectionTitle = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#1e293b',
  textAlign: 'center',
  marginBottom: '0.5rem'
}

const sectionSubtitle = {
  fontSize: '1rem',
  color: '#64748b',
  textAlign: 'center',
  marginBottom: '3rem'
}

const locationsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
}

const locationItem = {
  background: '#ffffff',
  padding: '2rem',
  borderLeft: '4px solid #6366f1',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
}

const locationHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.5rem'
}

const flag = {
  fontSize: '2rem'
}

const statusBadge = {
  padding: '0.375rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.75rem',
  fontWeight: 600,
  border: '1px solid'
}

const cityName = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '0.25rem'
}

const countryName = {
  fontSize: '1rem',
  color: '#64748b',
  marginBottom: '0.5rem'
}

const timezone = {
  fontSize: '0.875rem',
  color: '#94a3b8',
  marginBottom: '1.5rem'
}

const locationStats = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem'
}

const statNumber = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#6366f1',
  marginBottom: '0.25rem'
}

const statProgram = {
  fontSize: '1rem',
  fontWeight: 600,
  color: '#8b5cf6',
  marginBottom: '0.25rem'
}

const statLabel = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
}

const expandInfo = {
  marginTop: '1.5rem',
  padding: '1rem',
  background: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0'
}

const expandText = {
  fontSize: '0.875rem',
  color: '#475569',
  lineHeight: 1.6
}

const impactSection = {
  marginTop: '4rem',
  paddingTop: '4rem',
  borderTop: '1px solid #e2e8f0'
}

const impactTitle = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#1e293b',
  textAlign: 'center',
  marginBottom: '3rem'
}

const impactGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3rem'
}

const impactItem = {
  textAlign: 'center',
  padding: '1rem 0'
}

const impactIcon = {
  fontSize: '3rem',
  marginBottom: '1rem'
}

const impactItemTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '0.75rem'
}

const impactItemDesc = {
  fontSize: '0.95rem',
  color: '#64748b',
  lineHeight: 1.6
}
