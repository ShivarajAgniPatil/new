export default function Programs() {
  const programs = [
    {
      id: '01',
      title: 'AI Chatbot Tools',
      description: 'Intelligent chatbots for customer service, support, and automated interactions',
      tech: ['NLP', 'Python', 'OpenAI', 'Dialogflow'],
      duration: 'Internship Available'
    },
    {
      id: '02',
      title: 'AI Content Generator',
      description: 'AI-powered content creation tools for marketing, writing, and creative services',
      tech: ['GPT Models', 'LLMs', 'Python', 'API Integration'],
      duration: 'Internship Available'
    },
    {
      id: '03',
      title: 'AI Data Analytics',
      description: 'Advanced analytics tools using AI for business intelligence and insights',
      tech: ['Machine Learning', 'Data Science', 'Python', 'TensorFlow'],
      duration: 'Internship Available'
    },
    {
      id: '04',
      title: 'AI Image Processing',
      description: 'Computer vision tools for image recognition, processing, and analysis',
      tech: ['OpenCV', 'CNN', 'ImageAI', 'Deep Learning'],
      duration: 'Internship Available'
    },
    {
      id: '05',
      title: 'AI Automation Tools',
      description: 'Automated workflow solutions powered by AI for business processes',
      tech: ['RPA', 'AI Automation', 'Python', 'API Development'],
      duration: 'Internship Available'
    },
    {
      id: '06',
      title: 'AI Voice Assistant',
      description: 'Voice-enabled AI assistants for various service applications',
      tech: ['Speech Recognition', 'NLP', 'Python', 'Voice APIs'],
      duration: 'Internship Available'
    }
  ]
  
  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>CYANOPY</a>
          <div style={navLinksStyle}>
            <a href="/" style={navLinkStyle}>Home</a>
            <a href="/programs" style={{ ...navLinkStyle, color: '#6366f1', fontWeight: 600 }}>Programs</a>
            <a href="/about" style={navLinkStyle}>About</a>
            <a href="/global" style={navLinkStyle}>Global</a>
            <a href="/contact" style={navLinkStyle}>Contact</a>
          </div>
        </div>
      </nav>
      
      <section style={contentSection}>
        <div style={container}>
          <div style={header}>
            <div style={badge}>AI Tools & Internships</div>
            <h1 style={title}>
              Our <span style={gradientText}>AI Tools</span> & Internships
            </h1>
            <p style={description}>
              Explore our AI tools designed for services. Apply for internships to work on real AI projects.
            </p>
          </div>
          
          <div style={programsList}>
            {programs.map((program, index) => (
              <div key={index} style={programItem}>
                <div style={programHeader}>
                  <div style={programId}>{program.id}</div>
                  <div style={badgeSmall}>Available</div>
                </div>
                <h3 style={programTitle}>{program.title}</h3>
                <p style={programDesc}>{program.description}</p>
                <div style={techList}>
                  {program.tech.map((tech, i) => (
                    <span key={i} style={techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={programFooter}>
                  <div style={duration}>{program.duration}</div>
                  <a href="/contact" style={applyButton}>
                    Apply Internship →
                  </a>
                </div>
              </div>
            ))}
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

const programsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
}

const programItem = {
  padding: '2rem',
  borderBottom: '1px solid #e2e8f0',
  background: '#ffffff'
}

const programHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.5rem'
}

const programId = {
  fontSize: '2rem',
  fontWeight: 800,
  color: '#e2e8f0',
  lineHeight: 1
}

const badgeSmall = {
  padding: '0.375rem 0.75rem',
  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  color: '#ffffff',
  borderRadius: '20px',
  fontSize: '0.75rem',
  fontWeight: 600
}

const programTitle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '1rem'
}

const programDesc = {
  fontSize: '1rem',
  color: '#64748b',
  lineHeight: 1.6,
  marginBottom: '1.5rem'
}

const techList = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem'
}

const techTag = {
  padding: '0.5rem 0.875rem',
  background: '#f1f5f9',
  color: '#475569',
  borderRadius: '6px',
  fontSize: '0.875rem',
  fontWeight: 500
}

const programFooter = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '1.5rem',
  borderTop: '1px solid #e2e8f0'
}

const duration = {
  fontSize: '0.875rem',
  color: '#64748b',
  fontWeight: 500
}

const applyButton = {
  padding: '0.625rem 1.25rem',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  color: '#ffffff',
  borderRadius: '8px',
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontWeight: 600,
  transition: 'transform 0.2s ease'
}
