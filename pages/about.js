import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Digital DNA Helix - Tech representation
function DigitalHelix() {
  const groupRef = useRef()
  
  useEffect(() => {
    const segments = 150
    const radius = 6
    const height = 50
    
    // Create two helixes with glowing particles
    for(let strand = 0; strand < 2; strand++) {
      const points = []
      const offset = strand * Math.PI
      
      for(let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 10 + offset
        const y = (i / segments) * height - height / 2
        
        points.push(new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ))
      }
      
      // Create glowing line
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: strand === 0 ? 0x00ffff : 0xff00ff, 
        transparent: true, 
        opacity: 0.8 
      })
      const helix = new THREE.Line(geometry, material)
      groupRef.current.add(helix)
      
      // Add glowing spheres at intervals
      for(let i = 0; i < segments; i += 3) {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 8, 8),
          new THREE.MeshBasicMaterial({ 
            color: strand === 0 ? 0x00ffff : 0xff00ff 
          })
        )
        sphere.position.copy(points[i])
        groupRef.current.add(sphere)
      }
      
      // Connect strands
      if(strand === 1) {
        const firstStrand = groupRef.current.children[0].geometry.attributes.position
        for(let i = 0; i < segments; i += 5) {
          const point1 = new THREE.Vector3(
            firstStrand.getX(i),
            firstStrand.getY(i),
            firstStrand.getZ(i)
          )
          const connection = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([point1, points[i]]),
            new THREE.LineBasicMaterial({ 
              color: 0x00ff00, 
              transparent: true, 
              opacity: 0.3 
            })
          )
          groupRef.current.add(connection)
        }
      }
    }
  }, [])
  
  useFrame((state) => {
    if(groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2
    }
  })
  
  return <group ref={groupRef} />
}

export default function About() {
  const milestones = [
    {
      year: '2010',
      title: 'SYSTEM_INITIALIZED',
      description: 'Cyanpy launched with a vision to revolutionize tech education through AI'
    },
    {
      year: '2015',
      title: 'AI_INTEGRATION',
      description: 'Deployed first AI-powered adaptive learning system'
    },
    {
      year: '2018',
      title: 'GLOBAL_EXPANSION',
      description: 'Extended operations to 20+ countries across 5 continents'
    },
    {
      year: '2020',
      title: 'QUANTUM_LEAP',
      description: 'Introduced quantum computing and advanced ML programs'
    },
    {
      year: '2023',
      title: 'WEB3_REVOLUTION',
      description: 'Launched blockchain and decentralized technology training'
    },
    {
      year: '2025',
      title: 'FUTURE_READY',
      description: 'Leading the next generation of AI-powered education globally'
    }
  ]
  
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[15, 15, 15]} intensity={1} color="#00ffff" />
          <pointLight position={[-15, -15, -15]} intensity={0.5} color="#ff00ff" />
          <DigitalHelix />
        </Canvas>
      </div>
      
      <div style={scanLinesStyle} />
      
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>{'>'} CYANPY_</a>
          <div style={navLinksStyle}>
            <a href="/">HOME</a>
            <a href="/programs">PROGRAMS</a>
            <a href="/about" style={{ color: '#00ffff', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}>ABOUT</a>
            <a href="/global">GLOBAL</a>
            <a href="/contact">CONTACT</a>
          </div>
        </div>
      </nav>
      
      <div style={contentStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <div style={taglineStyle}>{'[ ABOUT_CYANPY.SYS ]'}</div>
            <h1 style={titleStyle}>
              REDEFINING <span style={gradientTextStyle}>TECH</span> EDUCATION
            </h1>
            <p style={descriptionStyle}>
              Building the future through artificial intelligence and advanced technology training
            </p>
          </div>
          
          {/* Mission Section */}
          <div style={missionBoxStyle}>
            <div style={missionHeaderStyle}>
              <div style={boxCorner1} />
              <div style={boxCorner2} />
              <h2 style={sectionTitleStyle}>{'>> MISSION_STATEMENT'}</h2>
            </div>
            <p style={missionTextStyle}>
              Cyanpy operates at the intersection of <span style={highlightStyle}>artificial intelligence</span>, 
              <span style={highlightStyle}> cutting-edge technology</span>, and 
              <span style={highlightStyle}> human potential</span>. We engineer learning experiences 
              that transform individuals into tech innovators capable of shaping tomorrow's digital landscape.
            </p>
            <div style={statsGridStyle}>
              <div style={statBoxStyle}>
                <div style={statNumberStyle}>15,000+</div>
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
              <div style={statBoxStyle}>
                <div style={statNumberStyle}>20+</div>
                <div style={statLabelStyle}>COUNTRIES</div>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div style={timelineContainerStyle}>
            <h2 style={timelineTitleStyle}>
              {'<'} EVOLUTION_TIMELINE {'>'}
            </h2>
            <div style={timelineStyle}>
              {milestones.map((milestone, index) => (
                <div key={index} style={timelineItemStyle}>
                  <div style={timelineMarkerStyle}>
                    <div style={markerDotStyle} />
                  </div>
                  <div style={timelineContentStyle}>
                    <div style={yearStyle}>[{milestone.year}]</div>
                    <h3 style={milestoneTitleStyle}>{'>> '}{milestone.title}</h3>
                    <p style={milestoneDescStyle}>{milestone.description}</p>
                  </div>
                  <div style={glowLineStyle} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Values */}
          <div style={valuesGridStyle}>
            <h2 style={valuesTitleStyle}>{'[ CORE_VALUES.CONFIG ]'}</h2>
            <div style={valuesContainerStyle}>
              {[
                { title: 'INNOVATION', desc: 'Pioneering next-gen tech solutions' },
                { title: 'EXCELLENCE', desc: 'Uncompromising quality standards' },
                { title: 'AI-FIRST', desc: 'Leveraging artificial intelligence' },
                { title: 'FUTURE-READY', desc: 'Preparing for tomorrow today' }
              ].map((value, i) => (
                <div key={i} style={valueCardStyle}>
                  <div style={valueIconStyle}>{'0x0'}{i + 1}</div>
                  <h3 style={valueTitleStyle}>{value.title}</h3>
                  <p style={valueDescStyle}>{value.desc}</p>
                  <div style={valueBottomLineStyle} />
                </div>
              ))}
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
  maxWidth: '1600px',
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

const missionBoxStyle = {
  background: 'rgba(0, 20, 40, 0.6)',
  border: '2px solid rgba(0, 255, 255, 0.4)',
  padding: '4rem',
  marginBottom: '6rem',
  position: 'relative',
  boxShadow: '0 0 40px rgba(0, 255, 255, 0.2), inset 0 0 40px rgba(0, 255, 255, 0.05)'
}

const missionHeaderStyle = {
  position: 'relative',
  marginBottom: '3rem'
}

const boxCorner1 = {
  position: 'absolute',
  top: -16,
  left: -16,
  width: '30px',
  height: '30px',
  borderTop: '3px solid #00ffff',
  borderLeft: '3px solid #00ffff'
}

const boxCorner2 = {
  position: 'absolute',
  top: -16,
  right: -16,
  width: '30px',
  height: '30px',
  borderTop: '3px solid #00ffff',
  borderRight: '3px solid #00ffff'
}

const sectionTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '4px',
  textShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
}

const missionTextStyle = {
  fontSize: '1.3rem',
  lineHeight: 2,
  color: 'rgba(255, 255, 255, 0.8)',
  fontFamily: 'monospace',
  marginBottom: '4rem'
}

const highlightStyle = {
  color: '#00ffff',
  fontWeight: 700,
  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
}

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem'
}

const statBoxStyle = {
  background: 'rgba(0, 255, 255, 0.05)',
  border: '2px solid rgba(0, 255, 255, 0.3)',
  padding: '2rem',
  textAlign: 'center',
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)'
}

const statNumberStyle = {
  fontSize: '3rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  marginBottom: '0.5rem',
  textShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
}

const statLabelStyle = {
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.6)',
  letterSpacing: '2px',
  fontFamily: 'monospace'
}

const timelineContainerStyle = {
  marginBottom: '6rem'
}

const timelineTitleStyle = {
  fontSize: '3rem',
  fontWeight: 900,
  color: '#ff00ff',
  fontFamily: 'monospace',
  letterSpacing: '4px',
  textAlign: 'center',
  marginBottom: '4rem',
  textShadow: '0 0 20px rgba(255, 0, 255, 0.8)'
}

const timelineStyle = {
  position: 'relative',
  paddingLeft: '4rem'
}

const timelineItemStyle = {
  position: 'relative',
  paddingBottom: '4rem'
}

const timelineMarkerStyle = {
  position: 'absolute',
  left: '-2.5rem',
  top: 0
}

const markerDotStyle = {
  width: '20px',
  height: '20px',
  background: '#00ffff',
  border: '3px solid #000',
  borderRadius: '50%',
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
}

const timelineContentStyle = {
  background: 'rgba(0, 20, 40, 0.4)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  padding: '2rem',
  position: 'relative'
}

const glowLineStyle = {
  position: 'absolute',
  left: '-2rem',
  top: '20px',
  bottom: '-4rem',
  width: '2px',
  background: 'linear-gradient(180deg, rgba(0, 255, 255, 0.6), rgba(0, 255, 255, 0.1))'
}

const yearStyle = {
  fontSize: '1.5rem',
  fontWeight: 900,
  color: '#ff00ff',
  fontFamily: 'monospace',
  marginBottom: '1rem',
  textShadow: '0 0 15px rgba(255, 0, 255, 0.8)'
}

const milestoneTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  marginBottom: '1rem'
}

const milestoneDescStyle = {
  fontSize: '1.1rem',
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'monospace',
  lineHeight: 1.8
}

const valuesGridStyle = {
  marginTop: '8rem'
}

const valuesTitleStyle = {
  fontSize: '3rem',
  fontWeight: 900,
  color: '#00ff00',
  fontFamily: 'monospace',
  letterSpacing: '4px',
  textAlign: 'center',
  marginBottom: '4rem',
  textShadow: '0 0 20px rgba(0, 255, 0, 0.8)'
}

const valuesContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '3rem'
}

const valueCardStyle = {
  background: 'rgba(0, 20, 40, 0.4)',
  border: '2px solid rgba(0, 255, 255, 0.3)',
  padding: '3rem',
  position: 'relative',
  transition: 'all 0.3s ease'
}

const valueIconStyle = {
  fontSize: '3rem',
  fontWeight: 900,
  color: 'rgba(255, 0, 255, 0.3)',
  fontFamily: 'monospace',
  marginBottom: '1.5rem'
}

const valueTitleStyle = {
  fontSize: '2rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '3px',
  marginBottom: '1rem',
  textShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const valueDescStyle = {
  fontSize: '1.1rem',
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'monospace',
  lineHeight: 1.8
}

const valueBottomLineStyle = {
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  width: '80px',
  height: '2px',
  background: 'linear-gradient(270deg, #ff00ff, transparent)',
  boxShadow: '0 0 10px rgba(255, 0, 255, 0.6)'
}
