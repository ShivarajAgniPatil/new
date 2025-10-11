import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

// Circuit Board Animation
function CircuitBoard() {
  const groupRef = useRef()
  
  useEffect(() => {
    // Create circuit paths
    const pathMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ffff, 
      transparent: true, 
      opacity: 0.6 
    })
    
    // Generate random circuit paths
    for(let i = 0; i < 50; i++) {
      const points = []
      let x = (Math.random() - 0.5) * 80
      let y = (Math.random() - 0.5) * 80
      let z = (Math.random() - 0.5) * 20
      
      for(let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(x, y, z))
        x += (Math.random() - 0.5) * 10
        y += (Math.random() - 0.5) * 10
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, pathMaterial)
      groupRef.current.add(line)
    }
    
    // Add nodes at intersections
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const nodeGeometry = new THREE.SphereGeometry(0.3, 8, 8)
    
    for(let i = 0; i < 30; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.x = (Math.random() - 0.5) * 80
      node.position.y = (Math.random() - 0.5) * 80
      node.position.z = (Math.random() - 0.5) * 20
      groupRef.current.add(node)
    }
  }, [])
  
  useFrame((state) => {
    if(groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })
  
  return <group ref={groupRef} />
}

export default function Programs() {
  const programs = [
    {
      id: '01',
      title: 'AI & MACHINE LEARNING',
      description: 'Master neural networks, deep learning algorithms, and artificial intelligence systems',
      tech: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Computer Vision'],
      duration: '14_MONTHS',
      level: 'ADVANCED'
    },
    {
      id: '02',
      title: 'FULL STACK DEVELOPMENT',
      description: 'Build scalable applications with modern frameworks and cloud technologies',
      tech: ['React', 'Node.js', 'Python', 'AWS'],
      duration: '12_MONTHS',
      level: 'INTERMEDIATE'
    },
    {
      id: '03',
      title: 'DATA SCIENCE & ANALYTICS',
      description: 'Extract insights from big data using statistical analysis and machine learning',
      tech: ['Python', 'R', 'SQL', 'Big Data'],
      duration: '10_MONTHS',
      level: 'INTERMEDIATE'
    },
    {
      id: '04',
      title: 'CLOUD COMPUTING',
      description: 'Design and deploy cloud-native applications on AWS, Azure, and GCP',
      tech: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      duration: '8_MONTHS',
      level: 'ADVANCED'
    },
    {
      id: '05',
      title: 'CYBERSECURITY',
      description: 'Protect digital assets through ethical hacking and security protocols',
      tech: ['Penetration Testing', 'Security', 'Cryptography', 'Network Security'],
      duration: '10_MONTHS',
      level: 'ADVANCED'
    },
    {
      id: '06',
      title: 'BLOCKCHAIN & WEB3',
      description: 'Build decentralized applications and smart contracts on blockchain',
      tech: ['Solidity', 'Ethereum', 'Smart Contracts', 'DeFi'],
      duration: '9_MONTHS',
      level: 'ADVANCED'
    }
  ]
  
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[20, 20, 20]} intensity={1} color="#00ffff" />
          <CircuitBoard />
        </Canvas>
      </div>
      
      {/* Scan Lines */}
      <div style={scanLinesStyle} />
      
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>{'>'} CYANPY_</a>
          <div style={navLinksStyle}>
            <a href="/">HOME</a>
            <a 
              href="/programs" 
              style={{ color: '#00ffff', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}
            >
              PROGRAMS
            </a>
            <a href="/about">ABOUT</a>
            <a href="/global">GLOBAL</a>
            <a href="/contact">CONTACT</a>
          </div>
        </div>
      </nav>
      
      <div style={contentStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <div style={taglineStyle}>{'[ SYSTEM_PROGRAMS_LOADED ]'}</div>
            <h1 style={titleStyle}>
              ADVANCED <span style={gradientTextStyle}>TECH</span> PROGRAMS
            </h1>
            <p style={descriptionStyle}>
              AI-Powered training systems designed for the future of technology
            </p>
          </div>
          
          <div style={gridStyle}>
            {programs.map((program, index) => (
              <div key={index} style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <div style={idStyle}>{program.id}</div>
                  <div style={levelBadgeStyle}>{program.level}</div>
                </div>
                
                <div style={cardBorderTopStyle} />
                
                <h3 style={cardTitleStyle}>{program.title}</h3>
                <p style={cardDescStyle}>{program.description}</p>
                
                <div style={techGridStyle}>
                  {program.tech.map((tech, i) => (
                    <div key={i} style={techTagStyle}>
                      {'>'} {tech}
                    </div>
                  ))}
                </div>
                
                <div style={cardFooterStyle}>
                  <div style={durationStyle}>
                    <span style={iconStyle}>⏱</span> {program.duration}
                  </div>
                  <a 
                    href="/contact" 
                    style={linkStyle}
                  >
                    ENROLL {'>>'}
                  </a>
                </div>
                
                <div style={cardBorderBottomStyle} />
                
                {/* Corner accents */}
                <div style={cornerAccent1} />
                <div style={cornerAccent2} />
                <div style={cornerAccent3} />
                <div style={cornerAccent4} />
              </div>
            ))}
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

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
  gap: '3rem'
}

const cardStyle = {
  position: 'relative',
  background: 'rgba(0, 20, 40, 0.6)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  padding: '3rem',
  transition: 'all 0.5s ease',
  boxShadow: '0 0 30px rgba(0, 255, 255, 0.1), inset 0 0 30px rgba(0, 255, 255, 0.02)'
}

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem'
}

const idStyle = {
  fontSize: '3rem',
  fontWeight: 900,
  color: 'rgba(0, 255, 255, 0.2)',
  fontFamily: 'monospace'
}

const levelBadgeStyle = {
  padding: '0.5rem 1rem',
  background: 'rgba(255, 0, 255, 0.2)',
  border: '1px solid #ff00ff',
  color: '#ff00ff',
  fontSize: '0.7rem',
  letterSpacing: '2px',
  fontFamily: 'monospace',
  boxShadow: '0 0 10px rgba(255, 0, 255, 0.4)'
}

const cardBorderTopStyle = {
  width: '60px',
  height: '2px',
  background: 'linear-gradient(90deg, #00ffff, transparent)',
  marginBottom: '2rem',
  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
}

const cardTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 900,
  marginBottom: '1.5rem',
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  textShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const cardDescStyle = {
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '2rem',
  lineHeight: 1.8,
  fontFamily: 'monospace',
  fontSize: '0.95rem'
}

const techGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  marginBottom: '2rem'
}

const techTagStyle = {
  padding: '0.7rem 1rem',
  background: 'rgba(0, 255, 255, 0.05)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '0.75rem',
  fontFamily: 'monospace',
  letterSpacing: '1px',
  textAlign: 'center'
}

const cardFooterStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '2rem',
  borderTop: '1px solid rgba(0, 255, 255, 0.2)'
}

const durationStyle = {
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.6)',
  letterSpacing: '1px'
}

const iconStyle = {
  color: '#00ffff',
  marginRight: '0.5rem'
}

const linkStyle = {
  color: '#ff00ff',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '2px',
  textShadow: '0 0 10px rgba(255, 0, 255, 0.8)',
  transition: 'all 0.3s ease'
}

const cardBorderBottomStyle = {
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  width: '100px',
  height: '2px',
  background: 'linear-gradient(270deg, #ff00ff, transparent)',
  boxShadow: '0 0 10px rgba(255, 0, 255, 0.6)'
}

// Corner Accents
const cornerAccent1 = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '20px',
  height: '20px',
  borderTop: '2px solid #00ffff',
  borderLeft: '2px solid #00ffff',
  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
}

const cornerAccent2 = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '20px',
  height: '20px',
  borderTop: '2px solid #00ffff',
  borderRight: '2px solid #00ffff',
  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
}

const cornerAccent3 = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '20px',
  height: '20px',
  borderBottom: '2px solid #ff00ff',
  borderLeft: '2px solid #ff00ff',
  boxShadow: '0 0 10px rgba(255, 0, 255, 0.6)'
}

const cornerAccent4 = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '20px',
  height: '20px',
  borderBottom: '2px solid #ff00ff',
  borderRight: '2px solid #ff00ff',
  boxShadow: '0 0 10px rgba(255, 0, 255, 0.6)'
}
