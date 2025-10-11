import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Modern Network Visualization
function NetworkVisualization() {
  const groupRef = useRef()
  const [hoveredNode, setHoveredNode] = useState(null)
  
  useEffect(() => {
    // Create network nodes
    const nodes = [
      { id: 'NY', name: 'New York', position: [15, 8, 0], connections: ['SG', 'LN', 'GE'] },
      { id: 'LN', name: 'London', position: [0, 10, 0], connections: ['NY', 'GE', 'DU'] },
      { id: 'SG', name: 'Singapore', position: [20, -5, 0], connections: ['NY', 'SH', 'MU'] },
      { id: 'SH', name: 'Shanghai', position: [18, 2, 0], connections: ['SG', 'MU', 'SY'] },
      { id: 'MU', name: 'Mumbai', position: [12, -8, 0], connections: ['SG', 'SH', 'DU'] },
      { id: 'DU', name: 'Dubai', position: [8, -2, 0], connections: ['MU', 'LN', 'GE'] },
      { id: 'GE', name: 'Geneva', position: [2, 6, 0], connections: ['LN', 'DU', 'SY'] },
      { id: 'SY', name: 'Sydney', position: [25, -12, 0], connections: ['SH', 'GE'] }
    ]
    
    // Create node spheres
    nodes.forEach(node => {
      const geometry = new THREE.SphereGeometry(0.5, 16, 16)
      const material = new THREE.MeshBasicMaterial({ 
        color: hoveredNode === node.id ? 0xff00ff : 0x00ffff,
        transparent: true,
        opacity: 0.8
      })
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set(...node.position)
      sphere.userData = { ...node, material }
      groupRef.current.add(sphere)
    })
    
    // Create connections
    nodes.forEach(node => {
      node.connections.forEach(connId => {
        const targetNode = nodes.find(n => n.id === connId)
        if (targetNode) {
          const points = [
            new THREE.Vector3(...node.position),
            new THREE.Vector3(...targetNode.position)
          ]
          const geometry = new THREE.BufferGeometry().setFromPoints(points)
          const material = new THREE.LineBasicMaterial({
            color: 0x00ff00,
            transparent: true,
            opacity: 0.3
          })
          const line = new THREE.Line(geometry, material)
          groupRef.current.add(line)
        }
      })
    })
    
    // Add floating particles
    for(let i = 0; i < 50; i++) {
      const geometry = new THREE.SphereGeometry(0.05, 8, 8)
      const material = new THREE.MeshBasicMaterial({ 
        color: Math.random() > 0.5 ? 0x00ffff : 0xff00ff,
        transparent: true,
        opacity: 0.6
      })
      const particle = new THREE.Mesh(geometry, material)
      particle.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      )
      particle.userData.speed = Math.random() * 0.01 + 0.005
      particle.userData.direction = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      )
      groupRef.current.add(particle)
    }
  }, [hoveredNode])
  
  useFrame((state) => {
    if(groupRef.current) {
      // Rotate the entire network slowly
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      
      // Animate particles
      groupRef.current.children.forEach(child => {
        if(child.userData.speed) {
          child.position.add(child.userData.direction)
          
          // Bounce particles back if they go too far
          if(Math.abs(child.position.x) > 25 || Math.abs(child.position.y) > 20) {
            child.userData.direction.x *= -1
          }
          if(Math.abs(child.position.z) > 15) {
            child.userData.direction.z *= -1
          }
        }
      })
    }
  })
  
  return <group ref={groupRef} />
}

export default function Global() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  
  const globalStats = [
    {
      title: 'GLOBAL REACH',
      value: '50+',
      subtitle: 'Countries',
      description: 'Serving students across all continents',
      color: '#00ffff'
    },
    {
      title: 'ACTIVE STUDENTS',
      value: '23,000+',
      subtitle: 'Learners',
      description: 'Currently enrolled in our programs',
      color: '#ff00ff'
    },
    {
      title: 'TECH HUBS',
      value: '8',
      subtitle: 'Cities',
      description: 'Major technology centers worldwide',
      color: '#00ff00'
    },
    {
      title: 'SUCCESS RATE',
      value: '98%',
      subtitle: 'Placement',
      description: 'Graduates placed in top companies',
      color: '#ffff00'
    }
  ]
  
  const locations = [
    {
      city: 'Geneva',
      country: 'Switzerland',
      flag: '🇨🇭',
      timezone: 'CET',
      students: '3,200+',
      programs: 'All Programs',
      status: 'Headquarters',
      coordinates: [2, 6],
      color: '#ff00ff'
    },
    {
      city: 'New York',
      country: 'USA',
      flag: '🇺🇸',
      timezone: 'EST',
      students: '2,800+',
      programs: 'AI & Cloud',
      status: 'Active',
      coordinates: [15, 8],
      color: '#00ffff'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      timezone: 'SGT',
      students: '4,100+',
      programs: 'Data Science',
      status: 'Active',
      coordinates: [20, -5],
      color: '#00ff00'
    },
    {
      city: 'London',
      country: 'UK',
      flag: '🇬🇧',
      timezone: 'GMT',
      students: '2,900+',
      programs: 'Full Stack',
      status: 'Active',
      coordinates: [0, 10],
      color: '#ffff00'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      flag: '🇦🇪',
      timezone: 'GST',
      students: '2,600+',
      programs: 'Cybersecurity',
      status: 'Active',
      coordinates: [8, -2],
      color: '#ff6600'
    },
    {
      city: 'Mumbai',
      country: 'India',
      flag: '🇮🇳',
      timezone: 'IST',
      students: '5,200+',
      programs: 'AI & ML',
      status: 'Active',
      coordinates: [12, -8],
      color: '#6600ff'
    }
  ]
  
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      {/* 3D Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[20, 20, 20]} intensity={1} color="#00ffff" />
          <pointLight position={[-20, -20, -20]} intensity={0.5} color="#ff00ff" />
          <NetworkVisualization />
        </Canvas>
      </div>
      
      {/* Scan Lines */}
      <div style={scanLinesStyle} />
      
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <a href="/" style={logoStyle}>{'>'} CYANPY_</a>
          <div style={navLinksStyle}>
            <a href="/">HOME</a>
            <a href="/programs">PROGRAMS</a>
            <a href="/about">ABOUT</a>
            <a 
              href="/global" 
              style={{ color: '#00ffff', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}
            >
              GLOBAL
            </a>
            <a href="/contact">CONTACT</a>
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <div style={contentStyle}>
        <div style={containerStyle}>
          {/* Header */}
          <div style={headerStyle}>
            <div style={taglineStyle}>{'[ GLOBAL_NETWORK_STATUS: ONLINE ]'}</div>
            <h1 style={titleStyle}>
              WORLDWIDE <span style={gradientTextStyle}>PRESENCE</span>
            </h1>
            <p style={descriptionStyle}>
              Connecting minds across continents through cutting-edge technology education
            </p>
          </div>
          
          {/* Stats Grid */}
          <div style={statsGridStyle}>
            {globalStats.map((stat, index) => (
              <div key={index} style={statCardStyle}>
                <div style={statIconStyle}>{'🌐'}</div>
                <div style={{...statValueStyle, color: stat.color }}>
                  {stat.value}
                </div>
                <div style={statTitleStyle}>{stat.title}</div>
                <div style={statSubtitleStyle}>{stat.subtitle}</div>
                <div style={statDescriptionStyle}>{stat.description}</div>
              </div>
            ))}
          </div>
          
          {/* Interactive Map Section */}
          <div style={mapSectionStyle}>
            <h2 style={sectionTitleStyle}>
              {'<'} INTERACTIVE_NETWORK_MAP {'>'}
            </h2>
            <p style={sectionSubtitleStyle}>
              Click on any location to explore our global presence
            </p>
            
            <div style={locationsGridStyle}>
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  style={{
                    ...locationCardStyle,
                    borderColor: selectedRegion === location.city ? location.color : 'rgba(255, 255, 255, 0.2)',
                    transform: selectedRegion === location.city ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: selectedRegion === location.city ? `0 0 30px ${location.color}40` : 'none'
                  }}
                  onClick={() => {
                    setSelectedRegion(selectedRegion === location.city ? null : location.city)
                  }}
                >
                  <div style={locationHeaderStyle}>
                    <div style={flagStyle}>{location.flag}</div>
                    <div style={{...statusBadgeStyle, backgroundColor: location.color + '20', borderColor: location.color }}>
                      {location.status}
                    </div>
                  </div>
                  
                  <h3 style={cityNameStyle}>{location.city}</h3>
                  <p style={countryNameStyle}>{location.country}</p>
                  <p style={timezoneStyle}>🕐 {location.timezone}</p>
                  
                  <div style={locationStatsStyle}>
                    <div style={statItemStyle}>
                      <div style={statNumberStyle}>{location.students}</div>
                      <div style={statLabelStyle}>Students</div>
                    </div>
                    <div style={statItemStyle}>
                      <div style={statProgramStyle}>{location.programs}</div>
                      <div style={statLabelStyle}>Focus</div>
                    </div>
                  </div>
                  
                  {selectedRegion === location.city && (
                    <div style={expandInfoStyle}>
                      <p style={expandTextStyle}>
                        Our {location.city} campus serves as a major tech hub, 
                        offering specialized programs in {location.programs.toLowerCase()}.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Global Impact */}
          <div style={impactSectionStyle}>
            <h2 style={impactTitleStyle}>{'>> GLOBAL_IMPACT_ANALYSIS'}</h2>
            <div style={impactGridStyle}>
              <div style={impactCardStyle}>
                <div style={impactIconStyle}>📊</div>
                <h3 style={impactCardTitleStyle}>EDUCATION_REACH</h3>
                <p style={impactCardDescStyle}>
                  Over 500,000 hours of advanced technology training delivered globally
                </p>
              </div>
              <div style={impactCardStyle}>
                <div style={impactIconStyle}>🎓</div>
                <h3 style={impactCardTitleStyle}>ALUMNI_NETWORK</h3>
                <p style={impactCardDescStyle}>
                  15,000+ graduates working at top tech companies worldwide
                </p>
              </div>
              <div style={impactCardStyle}>
                <div style={impactIconStyle}>🤝</div>
                <h3 style={impactCardTitleStyle}>PARTNERSHIPS</h3>
                <p style={impactCardDescStyle}>
                  Strategic alliances with 200+ leading technology companies
                </p>
              </div>
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
  letterSpacing: '1px',
  maxWidth: '800px',
  margin: '0 auto'
}

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginBottom: '6rem'
}

const statCardStyle = {
  background: 'rgba(0, 20, 40, 0.6)',
  border: '2px solid rgba(0, 255, 255, 0.3)',
  padding: '3rem 2rem',
  textAlign: 'center',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)'
}

const statIconStyle = {
  fontSize: '3rem',
  marginBottom: '1rem'
}

const statValueStyle = {
  fontSize: '4rem',
  fontWeight: 900,
  fontFamily: 'monospace',
  marginBottom: '0.5rem',
  textShadow: '0 0 20px currentColor'
}

const statTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  marginBottom: '0.5rem'
}

const statSubtitleStyle = {
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.6)',
  fontFamily: 'monospace',
  marginBottom: '1rem'
}

const statDescriptionStyle = {
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.5)',
  lineHeight: 1.6
}

const mapSectionStyle = {
  marginBottom: '6rem'
}

const sectionTitleStyle = {
  fontSize: '3rem',
  fontWeight: 900,
  color: '#ff00ff',
  fontFamily: 'monospace',
  letterSpacing: '4px',
  textAlign: 'center',
  marginBottom: '1rem',
  textShadow: '0 0 20px rgba(255, 0, 255, 0.8)'
}

const sectionSubtitleStyle = {
  fontSize: '1.1rem',
  color: 'rgba(255, 255, 255, 0.6)',
  textAlign: 'center',
  marginBottom: '4rem',
  fontFamily: 'monospace'
}

const locationsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem'
}

const locationCardStyle = {
  background: 'rgba(0, 20, 40, 0.5)',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  padding: '2rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden'
}

const locationHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.5rem'
}

const flagStyle = {
  fontSize: '2rem'
}

const statusBadgeStyle = {
  padding: '0.3rem 0.8rem',
  borderRadius: '20px',
  fontSize: '0.7rem',
  fontFamily: 'monospace',
  letterSpacing: '1px',
  border: '1px solid'
}

const cityNameStyle = {
  fontSize: '2rem',
  fontWeight: 900,
  color: '#00ffff',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  marginBottom: '0.5rem',
  textShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
}

const countryNameStyle = {
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'monospace',
  marginBottom: '1rem'
}

const timezoneStyle = {
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'monospace',
  marginBottom: '2rem'
}

const locationStatsStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem'
}

const statItemStyle = {
  textAlign: 'center'
}

const statNumberStyle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#ff00ff',
  fontFamily: 'monospace',
  marginBottom: '0.3rem'
}

const statProgramStyle = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#00ff00',
  fontFamily: 'monospace',
  marginBottom: '0.3rem'
}

const statLabelStyle = {
  fontSize: '0.7rem',
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'monospace',
  letterSpacing: '1px'
}

const expandInfoStyle = {
  marginTop: '2rem',
  padding: '1.5rem',
  background: 'rgba(0, 255, 255, 0.05)',
  border: '1px solid rgba(0, 255, 255, 0.2)',
  borderRadius: '8px'
}

const expandTextStyle = {
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  fontFamily: 'monospace'
}

const impactSectionStyle = {
  background: 'rgba(0, 20, 40, 0.4)',
  border: '2px solid rgba(255, 0, 255, 0.3)',
  borderRadius: '12px',
  padding: '4rem',
  boxShadow: '0 0 40px rgba(255, 0, 255, 0.2)'
}

const impactTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 900,
  color: '#ff00ff',
  fontFamily: 'monospace',
  letterSpacing: '3px',
  textAlign: 'center',
  marginBottom: '3rem',
  textShadow: '0 0 20px rgba(255, 0, 255, 0.8)'
}

const impactGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
}

const impactCardStyle = {
  background: 'rgba(255, 0, 255, 0.05)',
  border: '1px solid rgba(255, 0, 255, 0.3)',
  padding: '2.5rem',
  textAlign: 'center',
  borderRadius: '8px',
  transition: 'all 0.3s ease'
}

const impactIconStyle = {
  fontSize: '3rem',
  marginBottom: '1.5rem'
}

const impactCardTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#ff00ff',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  marginBottom: '1rem',
  textShadow: '0 0 15px rgba(255, 0, 255, 0.6)'
}

const impactCardDescStyle = {
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  fontFamily: 'monospace'
}