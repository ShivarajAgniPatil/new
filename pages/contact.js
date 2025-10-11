import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Data Transmission Waves
function DataWaves() {
  const groupRef = useRef()
  
  useEffect(() => {
    // Create multiple wave rings
    for(let i = 0; i < 8; i++) {
      const geometry = new THREE.TorusGeometry(5 + i * 2, 0.1, 16, 100)
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00ffff : 0xff00ff,
        transparent: true,
        opacity: 0.6 - i * 0.05
      })
      const torus = new THREE.Mesh(geometry, material)
      torus.rotation.x = Math.PI / 2
      torus.userData.delay = i * 0.3
      torus.userData.originalScale = 1
      groupRef.current.add(torus)
    }
    
    // Add signal particles
    for(let i = 0; i < 50; i++) {
      const particleGeom = new THREE.SphereGeometry(0.15, 8, 8)
      const particleMat = new THREE.MeshBasicMaterial({ 
        color: Math.random() > 0.5 ? 0x00ffff : 0xff00ff 
      })
      const particle = new THREE.Mesh(particleGeom, particleMat)
      
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 20 + 5
      particle.position.x = Math.cos(angle) * radius
      particle.position.y = (Math.random() - 0.5) * 10
      particle.position.z = Math.sin(angle) * radius
      
      particle.userData.speed = Math.random() * 0.02 + 0.01
      particle.userData.angle = angle
      particle.userData.radius = radius
      
      groupRef.current.add(particle)
    }
  }, [])
  
  useFrame((state) => {
    if(groupRef.current) {
      groupRef.current.rotation.y += 0.003
      
      groupRef.current.children.forEach((child, index) => {
        if(child.geometry.type === 'TorusGeometry') {
          const time = state.clock.elapsedTime - child.userData.delay
          child.scale.set(
            1 + Math.sin(time * 2) * 0.2,
            1 + Math.sin(time * 2) * 0.2,
            1 + Math.sin(time * 2) * 0.2
          )
          child.material.opacity = 0.4 + Math.sin(time * 2) * 0.3
        }
        
        // Animate particles
        if(child.userData.speed) {
          child.userData.angle += child.userData.speed
          child.position.x = Math.cos(child.userData.angle) * child.userData.radius
          child.position.z = Math.sin(child.userData.angle) * child.userData.radius
          child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.01
        }
      })
    }
  })
  
  return <group ref={groupRef} />
}

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
    alert('Message transmitted successfully! We will contact you soon.')
  }
  
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[20, 20, 20]} intensity={1} color="#00ffff" />
          <pointLight position={[-20, -20, -20]} intensity={0.5} color="#ff00ff" />
          <DataWaves />
        </Canvas>
      </div>
      
      <div style={scanLinesStyle} />
      
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>{'>'} CYANPY_</a>
          <div style={navLinksStyle}>
            <a href="/">HOME</a>
            <a href="/programs">PROGRAMS</a>
            <a href="/about">ABOUT</a>
            <a href="/global">GLOBAL</a>
            <a href="/contact" style={{ color: '#00ffff', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}>CONTACT</a>
          </div>
        </div>
      </nav>
      
      <div style={contentStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <div style={taglineStyle}>{'[ INITIATE_CONTACT_PROTOCOL ]'}</div>
            <h1 style={titleStyle}>
              CONNECT WITH <span style={gradientTextStyle}>CYANPY</span>
            </h1>
            <p style={descriptionStyle}>
              Ready to start your journey? Our team is standing by to assist you
            </p>
          </div>
          
          <div style={mainGridStyle}>
            {/* Contact Info */}
            <div style={infoSectionStyle}>
              <h2 style={sectionTitleStyle}>{'>> CONTACT_CHANNELS'}</h2>
              
              <div style={contactBoxStyle}>
                <div style={boxHeaderStyle}>
                  <div style={headerDotStyle} />
                  <span>HEADQUARTERS</span>
                </div>
                <h3 style={locationNameStyle}>GENEVA, SWITZERLAND</h3>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>ADDRESS:</span>
                  <span style={valueStyle}>Rue du Mont-Blanc 14, 1201</span>
                </div>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>COMM_LINK:</span>
                  <span style={valueStyle}>+41 227415900</span>
                </div>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>EMAIL:</span>
                  <span style={valueStyle}>hq@cyanpy.com</span>
                </div>
              </div>
              
              <div style={contactBoxStyle}>
                <div style={boxHeaderStyle}>
                  <div style={headerDotStyle} />
                  <span>ASIA HUB</span>
                </div>
                <h3 style={locationNameStyle}>SINGAPORE</h3>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>ADDRESS:</span>
                  <span style={valueStyle}>Marina One East Tower</span>
                </div>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>COMM_LINK:</span>
                  <span style={valueStyle}>+65 62286490</span>
                </div>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>EMAIL:</span>
                  <span style={valueStyle}>asia@cyanpy.com</span>
                </div>
              </div>
              
              <div style={contactBoxStyle}>
                <div style={boxHeaderStyle}>
                  <div style={headerDotStyle} />
                  <span>MIDDLE EAST</span>
                </div>
                <h3 style={locationNameStyle}>DUBAI, UAE</h3>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>ADDRESS:</span>
                  <span style={valueStyle}>DIFC, Brookfield Place</span>
                </div>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>COMM_LINK:</span>
                  <span style={valueStyle}>+971 45914032</span>
                </div>
                <div style={infoLineStyle}>
                  <span style={labelStyle}>EMAIL:</span>
                  <span style={valueStyle}>dubai@cyanpy.com</span>
                </div>
              </div>
              
              <div style={supportBoxStyle}>
                <h3 style={supportTitleStyle}>{'>> 24/7_SUPPORT'}</h3>
                <p style={supportTextStyle}>
                  Our AI-powered support team is available around the clock to answer your questions
                </p>
                <div style={supportBadgeStyle}>ALWAYS_ONLINE</div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={formContainerStyle}>
              <div style={formHeaderStyle}>
                <div style={formCorner1} />
                <div style={formCorner2} />
                <h2 style={formTitleStyle}>{'[ TRANSMISSION_FORM ]'}</h2>
              </div>
              
              <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formGroupStyle}>
                  <label style={labelInputStyle}>
                    {'>'} FULL_NAME *
                  </label>
                  <input 
                    type="text" 
                    required 
                    style={inputStyle}
                    placeholder="ENTER_NAME..."
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelInputStyle}>
                    {'>'} EMAIL_ADDRESS *
                  </label>
                  <input 
                    type="email" 
                    required 
                    style={inputStyle}
                    placeholder="YOUR@EMAIL.COM..."
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelInputStyle}>
                    {'>'} PHONE_NUMBER
                  </label>
                  <input 
                    type="tel" 
                    style={inputStyle}
                    placeholder="+1_234_567_8900..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelInputStyle}>
                    {'>'} SELECT_PROGRAM
                  </label>
                  <select 
                    style={selectStyle}
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                  >
                    <option value="">SELECT_PROGRAM...</option>
                    <option value="ai-ml">AI & MACHINE_LEARNING</option>
                    <option value="fullstack">FULL_STACK_DEVELOPMENT</option>
                    <option value="data-science">DATA_SCIENCE_&_ANALYTICS</option>
                    <option value="cloud">CLOUD_COMPUTING</option>
                    <option value="cybersecurity">CYBERSECURITY</option>
                    <option value="blockchain">BLOCKCHAIN_&_WEB3</option>
                  </select>
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelInputStyle}>
                    {'>'} MESSAGE *
                  </label>
                  <textarea 
                    required 
                    style={textareaStyle}
                    placeholder="ENTER_YOUR_MESSAGE..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button 
                  type="submit" 
                  style={submitBtnStyle}
                >
                  <span style={btnInnerStyle}>
                    {'>> TRANSMIT_MESSAGE'}
                  </span>
                </button>
                
                <div style={formFooterStyle}>
                  <div style={securityBadgeStyle}>
                    🔒 SECURED_CONNECTION
                  </div>
                  <div style={responseTimeStyle}>
                    ⚡ RESPONSE: {'<24_HOURS'}
                  </div>
                </div>
              </form>
              
              <div style={formCorner3} />
              <div style={formCorner4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Styles
const scanLinesStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.03) 0px, transparent 2px, transparent 4px)',
  pointerEvents: 'none',
  zIndex: 10
}

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.85)',
  backdropFilter: 'blur(20px)',
  zIndex: 1000,
  padding: '1rem 0',
  borderBottom: '2px solid rgba(0, 255, 255, 0.3)',
  boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)'
}

const navContainerStyle = {
  maxWidth: '1800px',
  margin: '0 auto',
  padding: '0 4rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const logoStyle = {
  fontSize: '1.8rem',
  fontWeight: 900,
  color: '#00ffff',
  letterSpacing: '3px',
  fontFamily: 'monospace',
  textShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
}

const navLinksStyle = {
  display: 'flex',
  gap: '3rem',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  letterSpacing: '2px',
  color: 'rgba(255, 255, 255, 0.7)'
}

const contentStyle = {
  position: 'relative',
  zIndex: 1,
  paddingTop: '140px',
  paddingBottom: '6rem',
  minHeight: '100vh'
}

const containerStyle = {
  maxWidth: '1800px',
  margin: '0 auto',
  padding: '0 4rem'
}

const headerStyle = {
  textAlign: 'center',
  marginBottom: '6rem'
}

const taglineStyle = {
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  color: '#00ff00',
  letterSpacing: '3px',
  marginBottom: '2rem',
  textShadow: '0 0 10px rgba(0, 255, 0, 0.8)'
}

const titleStyle = {
  fontSize: '5rem',
  fontWeight: 900,
  marginBottom: '2rem',
  letterSpacing: '8px',
  fontFamily: 'monospace',
  textTransform: 'uppercase',
  textShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
}

const gradientTextStyle = {
  background: 'linear-gradient(90deg, #00ffff 0%, #ff00ff 50%, #00ffff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8))'
}

const descriptionStyle = {
  fontSize: '1.2rem',
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'monospace',
  letterSpacing: '1px'
}

const mainGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.5fr',
  gap: '4rem'
}

const infoSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
}

const sectionTitleStyle = {
  fontSize: '2rem',
  fontWeight: 900,
  color: '#ff00ff',
  fontFamily: 'monospace',
  letterSpacing: '3px',
  marginBottom: '1rem',
  textShadow: '0 0 15px rgba(255, 0, 255, 0.6)'
}

const contactBoxStyle = {
  background: 'rgba(0, 20, 40, 0.5)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  padding: '2rem',
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)'
}

const boxHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.7rem',
  color: 'rgba(255, 255, 255, 0.5)',
  letterSpacing: '2px',
  fontFamily: 'monospace',
  marginBottom: '1.5rem'
}

const headerDotStyle = {
  width: '8px',
  height: '8px',
  background: '#00ff00',
  boxShadow: '0 0 10px rgba(0, 255, 0, 0.8)'
}

const locationNameStyle = {
  fontSize: '1.5rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  marginBottom: '1.5rem',
  textShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const infoLineStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
  fontFamily: 'monospace',
  fontSize: '0.9rem'
}

const labelStyle = {
  color: 'rgba(255, 255, 255, 0.5)',
  letterSpacing: '1px'
}

const valueStyle = {
  color: 'rgba(255, 255, 255, 0.9)',
  letterSpacing: '1px'
}

const supportBoxStyle = {
  background: 'rgba(255, 0, 255, 0.1)',
  border: '2px solid rgba(255, 0, 255, 0.4)',
  padding: '2rem',
  boxShadow: '0 0 30px rgba(255, 0, 255, 0.2)'
}

const supportTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: 900,
  color: '#ff00ff',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  marginBottom: '1rem',
  textShadow: '0 0 15px rgba(255, 0, 255, 0.8)'
}

const supportTextStyle = {
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.8,
  marginBottom: '1.5rem'
}

const supportBadgeStyle = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  background: 'rgba(0, 255, 0, 0.2)',
  border: '1px solid #00ff00',
  color: '#00ff00',
  fontSize: '0.7rem',
  letterSpacing: '2px',
  fontFamily: 'monospace',
  boxShadow: '0 0 10px rgba(0, 255, 0, 0.4)'
}

const formContainerStyle = {
  position: 'relative',
  background: 'rgba(0, 20, 40, 0.6)',
  border: '2px solid rgba(0, 255, 255, 0.4)',
  padding: '0',
  boxShadow: '0 0 40px rgba(0, 255, 255, 0.2), inset 0 0 40px rgba(0, 255, 255, 0.05)'
}

const formHeaderStyle = {
  position: 'relative',
  padding: '2rem 3rem',
  borderBottom: '2px solid rgba(0, 255, 255, 0.3)'
}

const formCorner1 = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '30px',
  height: '30px',
  borderTop: '3px solid #00ffff',
  borderLeft: '3px solid #00ffff',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const formCorner2 = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '30px',
  height: '30px',
  borderTop: '3px solid #00ffff',
  borderRight: '3px solid #00ffff',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const formCorner3 = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '30px',
  height: '30px',
  borderBottom: '3px solid #ff00ff',
  borderLeft: '3px solid #ff00ff',
  boxShadow: '0 0 15px rgba(255, 0, 255, 0.6)'
}

const formCorner4 = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '30px',
  height: '30px',
  borderBottom: '3px solid #ff00ff',
  borderRight: '3px solid #ff00ff',
  boxShadow: '0 0 15px rgba(255, 0, 255, 0.6)'
}

const formTitleStyle = {
  fontSize: '2rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '3px',
  textShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
}

const formStyle = {
  padding: '3rem'
}

const formGroupStyle = {
  marginBottom: '2rem'
}

const labelInputStyle = {
  display: 'block',
  fontSize: '0.9rem',
  color: '#00ffff',
  marginBottom: '0.8rem',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
}

const inputStyle = {
  width: '100%',
  padding: '1.2rem',
  background: 'rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  color: '#ffffff',
  fontSize: '1rem',
  fontFamily: 'monospace',
  transition: 'all 0.3s ease',
  boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)'
}

const selectStyle = {
  width: '100%',
  padding: '1.2rem',
  background: 'rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  color: '#ffffff',
  fontSize: '1rem',
  fontFamily: 'monospace',
  transition: 'all 0.3s ease',
  boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)',
  cursor: 'pointer'
}

const textareaStyle = {
  width: '100%',
  padding: '1.2rem',
  background: 'rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  color: '#ffffff',
  fontSize: '1rem',
  fontFamily: 'monospace',
  resize: 'vertical',
  transition: 'all 0.3s ease',
  boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)',
  minHeight: '150px'
}

const submitBtnStyle = {
  width: '100%',
  padding: '1.5rem',
  background: 'rgba(0, 255, 255, 0.1)',
  border: '2px solid #00ffff',
  color: '#00ffff',
  fontSize: '1.1rem',
  fontWeight: 900,
  fontFamily: 'monospace',
  letterSpacing: '3px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1)',
  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
  marginBottom: '2rem'
}

const btnInnerStyle = {
  display: 'block'
}

const formFooterStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '2rem',
  borderTop: '1px solid rgba(0, 255, 255, 0.2)'
}

const securityBadgeStyle = {
  fontFamily: 'monospace',
  fontSize: '0.75rem',
  color: '#00ff00',
  letterSpacing: '1px',
  textShadow: '0 0 10px rgba(0, 255, 0, 0.8)'
}

const responseTimeStyle = {
  fontFamily: 'monospace',
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.6)',
  letterSpacing: '1px'
}
