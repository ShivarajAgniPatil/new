export default function About() {
  const milestones = [
    {
      year: '2022',
      title: 'Startup Launched',
      description: 'CYANOPY founded in India with a vision to create innovative AI tools for services'
    },
    {
      year: '2023',
      title: 'First AI Tools',
      description: 'Successfully developed and deployed our first set of AI-powered service tools'
    },
    {
      year: '2024',
      title: 'Internship Program',
      description: 'Launched internship program to nurture young AI developers across India'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Expanded our AI tool portfolio and increased internship opportunities'
    },
    {
      year: '2025',
      title: 'Growth',
      description: 'Growing team of developers and interns, creating cutting-edge AI solutions'
    },
    {
      year: '2025',
      title: 'Future Focused',
      description: 'Continuing to design and create AI tools while offering valuable internships'
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
            <a href="/about" style={{ ...navLinkStyle, color: '#6366f1', fontWeight: 600 }}>About</a>
            <a href="/global" style={navLinkStyle}>Global</a>
            <a href="/contact" style={navLinkStyle}>Contact</a>
          </div>
        </div>
      </nav>
      
      <section style={contentSection}>
        <div style={container}>
          <div style={header}>
            <div style={badge}>About CYANOPY</div>
            <h1 style={title}>
              Designing <span style={gradientText}>AI Tools</span> for Services
            </h1>
            <p style={description}>
              Indian-based startup creating innovative AI solutions and offering internships to passionate developers
            </p>
          </div>
          
          {/* Mission Section */}
          <div style={missionSection}>
            <h2 style={sectionTitle}>Our Mission</h2>
            <p style={missionText}>
              CYANOPY is an <strong>Indian-based startup</strong> focused on 
              <strong> designing and creating AI tools</strong> for various services. 
              We combine <strong>artificial intelligence</strong> with 
              <strong> innovative solutions</strong> to solve real-world problems. 
              Through our <strong>internship programs</strong>, we nurture the next generation 
              of AI developers and provide hands-on experience in building cutting-edge AI applications.
            </p>
            <div style={statsGrid}>
              <div style={statBox}>
                <div style={statNum}>50+</div>
                <div style={statText}>AI Tools</div>
              </div>
              <div style={statBox}>
                <div style={statNum}>100+</div>
                <div style={statText}>Interns</div>
              </div>
              <div style={statBox}>
                <div style={statNum}>🇮🇳</div>
                <div style={statText}>Made in India</div>
              </div>
              <div style={statBox}>
                <div style={statNum}>24/7</div>
                <div style={statText}>Support</div>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div style={timelineSection}>
            <h2 style={sectionTitle}>Our Journey</h2>
            <div style={timeline}>
              {milestones.map((milestone, index) => (
                <div key={index} style={timelineItem}>
                  <div style={timelineMarker} />
                  <div style={timelineContent}>
                    <div style={year}>{milestone.year}</div>
                    <h3 style={milestoneTitle}>{milestone.title}</h3>
                    <p style={milestoneDesc}>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Values */}
          <div style={valuesSection}>
            <h2 style={sectionTitle}>Core Values</h2>
            <div style={valuesGrid}>
              {[
                { title: 'AI Tools', desc: 'Designing and creating innovative AI solutions' },
                { title: 'Internships', desc: 'Providing opportunities to passionate developers' },
                { title: 'Made in India', desc: 'Proudly Indian startup serving globally' },
                { title: 'Innovation', desc: 'Building cutting-edge AI tools for services' }
              ].map((value, i) => (
                <div key={i} style={valueItem}>
                  <h3 style={valueTitle}>{value.title}</h3>
                  <p style={valueDesc}>{value.desc}</p>
                </div>
              ))}
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

const missionSection = {
  marginBottom: '4rem',
  paddingBottom: '4rem',
  borderBottom: '1px solid #e2e8f0'
}

const sectionTitle = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '2rem'
}

const missionText = {
  fontSize: '1.125rem',
  color: '#475569',
  lineHeight: 1.8,
  marginBottom: '2.5rem'
}

const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem'
}

const statBox = {
  textAlign: 'center'
}

const statNum = {
  fontSize: '2.5rem',
  fontWeight: 800,
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '0.5rem'
}

const statText = {
  fontSize: '0.95rem',
  color: '#64748b',
  fontWeight: 500
}

const timelineSection = {
  marginBottom: '4rem',
  paddingBottom: '4rem',
  borderBottom: '1px solid #e2e8f0'
}

const timeline = {
  position: 'relative',
  paddingLeft: '2rem'
}

const timelineItem = {
  position: 'relative',
  paddingBottom: '3rem',
  paddingLeft: '2rem',
  borderLeft: '2px solid #e2e8f0'
}

const timelineMarker = {
  position: 'absolute',
  left: '-8px',
  top: 0,
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  border: '3px solid #ffffff'
}

const timelineContent = {
  padding: '1.5rem 0'
}

const year = {
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#6366f1',
  marginBottom: '0.5rem'
}

const milestoneTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '0.5rem'
}

const milestoneDesc = {
  fontSize: '1rem',
  color: '#64748b',
  lineHeight: 1.6
}

const valuesSection = {
  marginTop: '4rem'
}

const valuesGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3rem'
}

const valueItem = {
  padding: '1rem 0'
}

const valueTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '0.75rem'
}

const valueDesc = {
  fontSize: '1rem',
  color: '#64748b',
  lineHeight: 1.6
}
