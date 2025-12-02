import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully! We will contact you soon.')
  }
  
  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>CYANOPY</a>
          <div style={navLinksStyle}>
            <a href="/" style={navLinkStyle}>Home</a>
            <a href="/programs" style={navLinkStyle}>Programs</a>
            <a href="/about" style={navLinkStyle}>About</a>
            <a href="/global" style={navLinkStyle}>Global</a>
            <a href="/contact" style={{ ...navLinkStyle, color: '#6366f1', fontWeight: 600 }}>Contact</a>
          </div>
        </div>
      </nav>
      
      <section style={contentSection}>
        <div style={container}>
          <div style={header}>
            <div style={badge}>Get in Touch</div>
            <h1 style={title}>
              Contact <span style={gradientText}>CYANOPY</span>
            </h1>
            <p style={description}>
              Interested in our AI tools? Want to apply for internships? Get in touch!
            </p>
          </div>
          
          <div style={mainGrid}>
            {/* Contact Info */}
            <div style={infoSection}>
              <h2 style={sectionTitle}>Company Information</h2>
              
              <div style={companyInfo}>
                <div style={infoRow}>
                  <span style={infoLabel}>Mobile:</span>
                  <span style={infoValue}>+91 80739 25727 | +91 63662 10650</span>
                </div>
                <div style={infoRow}>
                  <span style={infoLabel}>Email:</span>
                  <span style={infoValue}>cyanopy3@gmail.com</span>
                </div>
                <div style={infoRow}>
                  <span style={infoLabel}>Address:</span>
                  <span style={infoValue}>
                    No. 52, 2nd Cross, Indiranagar, WCR, Rajajinagar,<br />
                    Bangalore North, Karnataka – 560010
                  </span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={formSection}>
              <h2 style={formTitle}>Send us a Message</h2>
              
              <form onSubmit={handleSubmit} style={form}>
                <div style={formGroup}>
                  <label style={label}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    style={input}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div style={formGroup}>
                  <label style={label}>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    style={input}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div style={formGroup}>
                  <label style={label}>Phone Number</label>
                  <input 
                    type="tel" 
                    style={input}
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div style={formGroup}>
                  <label style={label}>Interest / Internship Type</label>
                  <select 
                    style={select}
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                  >
                    <option value="">Select an option...</option>
                    <option value="ai-chatbot">AI Chatbot Tools - Internship</option>
                    <option value="ai-content">AI Content Generator - Internship</option>
                    <option value="ai-analytics">AI Data Analytics - Internship</option>
                    <option value="ai-image">AI Image Processing - Internship</option>
                    <option value="ai-automation">AI Automation Tools - Internship</option>
                    <option value="ai-voice">AI Voice Assistant - Internship</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div style={formGroup}>
                  <label style={label}>Message *</label>
                  <textarea 
                    required 
                    style={textarea}
                    placeholder="Enter your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button type="submit" style={submitButton}>
                  Send Message
                </button>
                
                <div style={formFooter}>
                  <div style={footerText}>🔒 Secured Connection</div>
                  <div style={footerText}>⚡ Response within 24 hours</div>
                </div>
              </form>
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

const mainGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '3rem'
}

const infoSection = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
}

const sectionTitle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '1rem'
}

const companyInfo = {
  padding: '1.5rem 0',
  borderBottom: '1px solid #e2e8f0'
}

const companyName = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '1.5rem',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}

const websiteLink = {
  color: '#6366f1',
  textDecoration: 'none',
  fontWeight: 500
}

const infoRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
  fontSize: '0.95rem'
}

const infoLabel = {
  color: '#64748b',
  fontWeight: 500
}

const infoValue = {
  color: '#1e293b',
  fontWeight: 500
}

const internshipSection = {
  padding: '1.5rem',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  borderRadius: '12px',
  color: '#ffffff'
}

const internshipTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  marginBottom: '0.75rem'
}

const internshipText = {
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: '1rem',
  opacity: 0.95
}

const applyBadge = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  background: '#ffffff',
  color: '#6366f1',
  borderRadius: '6px',
  fontSize: '0.875rem',
  fontWeight: 600
}

const formSection = {
  background: '#ffffff',
  padding: '2rem',
  borderRadius: '12px'
}

const formTitle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '2rem'
}

const form = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
}

const formGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
}

const label = {
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#475569'
}

const input = {
  padding: '0.875rem',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  fontFamily: 'inherit',
  background: '#ffffff',
  color: '#1e293b',
  transition: 'border-color 0.2s ease'
}

const select = {
  padding: '0.875rem',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  fontFamily: 'inherit',
  background: '#ffffff',
  color: '#1e293b',
  cursor: 'pointer'
}

const textarea = {
  padding: '0.875rem',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  fontFamily: 'inherit',
  background: '#ffffff',
  color: '#1e293b',
  resize: 'vertical',
  minHeight: '120px'
}

const submitButton = {
  padding: '0.875rem 2rem',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  color: '#ffffff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  boxShadow: '0 4px 6px rgba(99, 102, 241, 0.3)'
}

const formFooter = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '1rem',
  borderTop: '1px solid #e2e8f0',
  fontSize: '0.875rem',
  color: '#64748b'
}

const footerText = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
}
