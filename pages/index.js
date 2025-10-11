import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

// Particle Field - Futuristic Tech Background
function ParticleField() {
  const pointsRef = useRef()
  const particleCount = 2000
  
  useEffect(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for(let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      // Cyan/electric blue colors
      colors[i * 3] = Math.random() * 0.3
      colors[i * 3 + 1] = 0.7 + Math.random() * 0.3
      colors[i * 3 + 2] = 1
    }
    
    pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  }, [])
  
  useFrame((state) => {
    if(pointsRef.current && pointsRef.current.geometry && pointsRef.current.geometry.attributes.position) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
      
      const positions = pointsRef.current.geometry.attributes.position.array
      for(let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial size={0.15} vertexColors transparent opacity={0.8} />
    </points>
  )
}

// Holographic Grid
function HolographicGrid() {
  const gridRef = useRef()
  
  useFrame((state) => {
    if(gridRef.current) {
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2
      gridRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })
  
  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

export default function Home() {
  const heroRef = useRef()
  const [glitchActive, setGlitchActive] = useState(false)
  
  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power3.out' }
    )
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 5000)
    
    return () => clearInterval(glitchInterval)
  }, [])
  
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      {/* Three.js Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 40], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[20, 20, 20]} intensity={1} color="#00ffff" />
          <pointLight position={[-20, -20, -20]} intensity={0.5} color="#ff00ff" />
          <ParticleField />
          <HolographicGrid />
        </Canvas>
      </div>
      
      {/* Scan Lines Overlay */}
      <div style={scanLinesStyle} />
      
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <div style={logoStyle}>
            <span style={glitchActive ? glitchStyle : {}}>{'>'} CYANPY_</span>
          </div>
          <div style={navLinksStyle}>
            <a 
              href="/" 
              style={{ ...navLinkStyle, color: '#00ffff' }}
            >
              <span style={linkGlowStyle}>HOME</span>
            </a>
            <a 
              href="/programs" 
              style={navLinkStyle}
            >
              PROGRAMS
            </a>
            <a 
              href="/about" 
              style={navLinkStyle}
            >
              ABOUT
            </a>
            <a 
              href="/global" 
              style={navLinkStyle}
            >
              GLOBAL
            </a>
            <a 
              href="/contact" 
              style={navLinkStyle}
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div ref={heroRef} style={heroStyle}>
        <div style={techBorderStyle}>
          <div style={cornerStyle1} />
          <div style={cornerStyle2} />
          <div style={cornerStyle3} />
          <div style={cornerStyle4} />
          
          <div style={glitchTextContainerStyle}>
            <h1 style={heroTitleStyle} className={glitchActive ? 'glitch' : ''}>
              NEXT-GENERATION
              <br />
              <span style={gradientTextStyle}>AI-POWERED</span>
              <br />
              EDUCATION PLATFORM
            </h1>
          </div>
        </div>
        
        <p style={heroSubtitleStyle}>
          <span style={typewriterStyle}>
            {'[ INITIALIZING_SYSTEM... ]'}
          </span>
          <br />
          Transforming learners into tech innovators through advanced artificial intelligence,
          <br />
          machine learning, and cutting-edge technology training.
        </p>
        
        <div style={ctaButtonsStyle}>
          <a 
            href="/programs" 
            style={btnPrimaryStyle}
          >
            <span style={buttonInnerStyle}>
              {'>> EXPLORE PROGRAMS'}
            </span>
          </a>
          <a 
            href="/about" 
            style={btnSecondaryStyle}
          >
            <span style={buttonInnerStyle}>
              {'[_VIEW_SYSTEMS_]'}
            </span>
          </a>
        </div>
        
        <div style={statsGridStyle}>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>15K+</div>
            <div style={statLabelStyle}>GRADUATES</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>98%</div>
            <div style={statLabelStyle}>SUCCESS_RATE</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>50+</div>
            <div style={statLabelStyle}>AI_PROGRAMS</div>
          </div>
        </div>
      </div>
      
      <div style={scrollIndicatorStyle}>
        <div style={arrowAnimStyle}>▼</div>
        SCROLL_TO_EXPLORE
      </div>
    </div>
  )
}

// Styles - Futuristic Tech Theme
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
  textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)'
}

const glitchStyle = {
  animation: 'glitch 0.3s infinite'
}

const navLinksStyle = {
  display: 'flex',
  gap: '3rem',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  letterSpacing: '2px'
}

const navLinkStyle = {
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.3s ease',
  position: 'relative',
  padding: '0.5rem 0'
}

const linkGlowStyle = {
  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
}

const heroStyle = {
  position: 'relative',
  zIndex: 1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '0 4rem'
}

const techBorderStyle = {
  position: 'relative',
  padding: '4rem',
  marginBottom: '3rem'
}

const cornerStyle1 = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '30px',
  height: '30px',
  borderTop: '3px solid #00ffff',
  borderLeft: '3px solid #00ffff',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const cornerStyle2 = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '30px',
  height: '30px',
  borderTop: '3px solid #00ffff',
  borderRight: '3px solid #00ffff',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const cornerStyle3 = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '30px',
  height: '30px',
  borderBottom: '3px solid #00ffff',
  borderLeft: '3px solid #00ffff',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const cornerStyle4 = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '30px',
  height: '30px',
  borderBottom: '3px solid #00ffff',
  borderRight: '3px solid #00ffff',
  boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const glitchTextContainerStyle = {
  position: 'relative'
}

const heroTitleStyle = {
  fontSize: '5.5rem',
  fontWeight: 900,
  lineHeight: 1.1,
  marginBottom: '0',
  letterSpacing: '5px',
  fontFamily: 'monospace',
  color: '#fff',
  textTransform: 'uppercase',
  textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
}

const gradientTextStyle = {
  background: 'linear-gradient(90deg, #00ffff 0%, #ff00ff 50%, #00ffff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: 'none',
  filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8))'
}

const typewriterStyle = {
  fontFamily: 'monospace',
  fontSize: '1rem',
  color: '#00ff00',
  textShadow: '0 0 10px rgba(0, 255, 0, 0.8)',
  letterSpacing: '2px'
}

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '4rem',
  maxWidth: '1000px',
  lineHeight: 2,
  fontFamily: 'monospace',
  letterSpacing: '1px'
}

const ctaButtonsStyle = {
  display: 'flex',
  gap: '2rem',
  marginBottom: '5rem'
}

const buttonInnerStyle = {
  fontFamily: 'monospace',
  letterSpacing: '3px'
}

const btnPrimaryStyle = {
  padding: '1.5rem 3rem',
  background: 'rgba(0, 255, 255, 0.1)',
  color: '#00ffff',
  fontWeight: 700,
  fontSize: '1rem',
  border: '2px solid #00ffff',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1)',
  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
}

const btnSecondaryStyle = {
  padding: '1.5rem 3rem',
  background: 'rgba(255, 0, 255, 0.05)',
  color: '#ff00ff',
  fontWeight: 700,
  fontSize: '1rem',
  border: '2px solid #ff00ff',
  transition: 'all 0.3s ease',
  boxShadow: '0 0 20px rgba(255, 0, 255, 0.3), inset 0 0 20px rgba(255, 0, 255, 0.05)',
  textShadow: '0 0 10px rgba(255, 0, 255, 0.6)'
}

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '3rem',
  maxWidth: '1000px',
  width: '100%'
}

const statBoxStyle = {
  background: 'rgba(0, 255, 255, 0.05)',
  border: '2px solid rgba(0, 255, 255, 0.3)',
  padding: '2rem',
  position: 'relative',
  boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 30px rgba(0, 255, 255, 0.05)'
}

const statNumberStyle = {
  fontSize: '3.5rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  marginBottom: '0.5rem',
  textShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
}

const statLabelStyle = {
  fontSize: '0.8rem',
  color: 'rgba(255, 255, 255, 0.6)',
  letterSpacing: '3px',
  fontFamily: 'monospace'
}

const scrollIndicatorStyle = {
  position: 'absolute',
  bottom: '3rem',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#00ffff',
  fontSize: '0.8rem',
  letterSpacing: '3px',
  fontFamily: 'monospace',
  zIndex: 2,
  textAlign: 'center',
  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
}

const arrowAnimStyle = {
  fontSize: '1.5rem',
  marginBottom: '0.5rem',
  animation: 'bounce 2s infinite'
}

