import '../styles/globals.css'
import '../styles/responsive.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="CYANOPY - Indian AI Startup | Designing and Creating AI Tools for Services | Internships Available" />
        <title>CYANOPY - Indian AI Startup | AI Tools & Internships</title>
        <style>{`
          /* Force mobile responsive overrides */
          
          /* Ensure body doesn't overflow */
          body {
            overflow-x: hidden !important;
            width: 100%;
          }
          
          /* All containers should respect screen width */
          * {
            max-width: 100vw;
            box-sizing: border-box;
          }
          
          @media (max-width: 768px) {
            /* Navigation */
            nav {
              padding: 1rem 0 !important;
            }
            
            nav > div {
              flex-direction: column !important;
              padding: 0 1rem !important;
              gap: 1rem !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            
            nav > div > div:first-child {
              font-size: 1.3rem !important;
              text-align: center;
            }
            
            nav > div > div:last-child {
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 1rem !important;
              font-size: 0.75rem !important;
              width: 100%;
            }
            
            /* Hero and content - ensure no overflow */
            div[style*="padding: 0 4rem"] {
              padding: 0 1rem !important;
              width: 100% !important;
              max-width: 100% !important;
              overflow-x: hidden !important;
            }
            
            div[style*="padding: 4rem"] {
              padding: 1.5rem !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            
            div[style*="padding: 3rem"] {
              padding: 1.5rem !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            
            div[style*="padding: 2rem"] {
              padding: 1rem !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            
            /* Ensure all content containers fit */
            div[style*="max-width: 1800px"],
            div[style*="max-width: 1600px"],
            div[style*="max-width: 1400px"],
            div[style*="max-width: 1200px"],
            div[style*="max-width: 1000px"] {
              max-width: 100% !important;
              width: 100% !important;
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
            
            /* Titles - ensure they fit and wrap */
            h1, h2, h3, h4, h5, h6 {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              hyphens: auto !important;
              max-width: 100% !important;
            }
            
            h1[style*="font-size: 5.5rem"],
            h1[style*="5.5rem"] {
              font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
              letter-spacing: 1px !important;
              line-height: 1.2 !important;
            }
            
            h1[style*="font-size: 4.5rem"],
            h1[style*="4.5rem"] {
              font-size: clamp(1.6rem, 5vw, 2rem) !important;
              line-height: 1.2 !important;
            }
            
            h2[style*="font-size: 3.5rem"],
            h3[style*="font-size: 3.5rem"] {
              font-size: clamp(1.4rem, 4.5vw, 1.8rem) !important;
              line-height: 1.3 !important;
            }
            
            h3[style*="font-size: 2.2rem"],
            h3[style*="font-size: 2rem"],
            h3[style*="font-size: 1.8rem"] {
              font-size: clamp(1.1rem, 4vw, 1.3rem) !important;
              line-height: 1.3 !important;
            }
            
            /* Paragraphs - ensure readability */
            p {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              max-width: 100% !important;
            }
            
            p[style*="font-size: 1.2rem"] {
              font-size: clamp(0.85rem, 2.5vw, 1rem) !important;
              line-height: 1.6 !important;
            }
            
            p[style*="font-size"] {
              font-size: clamp(0.85rem, 2.5vw, 1rem) !important;
            }
            
            /* Grids */
            div[style*="grid-template-columns: repeat(3"],
            div[style*="grid-template-columns:repeat(3"] {
              grid-template-columns: 1fr !important;
            }
            
            div[style*="grid-template-columns: repeat(auto-fit"] {
              grid-template-columns: 1fr !important;
            }
            
            /* Buttons and links - ensure they fit */
            div[style*="display: flex"][style*="gap: 2rem"],
            div[style*="display: flex"][style*="gap: 3rem"] {
              flex-direction: column !important;
              gap: 1rem !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            
            a, button {
              max-width: 100% !important;
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
            }
            
            a[style*="padding: 1.5rem 3rem"],
            a[style*="padding: 1.5rem 2rem"],
            button[style*="padding: 1.5rem"] {
              padding: 1rem 1.5rem !important;
              font-size: clamp(0.8rem, 2.5vw, 0.9rem) !important;
              width: 100% !important;
              max-width: 100% !important;
              display: block !important;
              text-align: center !important;
              box-sizing: border-box !important;
            }
            
            /* Margins */
            div[style*="margin-bottom: 6rem"] {
              margin-bottom: 3rem !important;
            }
            
            div[style*="margin-bottom: 5rem"] {
              margin-bottom: 2.5rem !important;
            }
            
            div[style*="margin-bottom: 4rem"] {
              margin-bottom: 2rem !important;
            }
            
            /* Gaps */
            div[style*="gap: 3rem"] {
              gap: 1.5rem !important;
            }
            
            /* Padding top */
            div[style*="padding-top: 120px"],
            div[style*="padding-top: 140px"] {
              padding-top: 100px !important;
            }
            
            /* Canvas and fixed elements */
            canvas {
              max-width: 100vw !important;
              width: 100% !important;
            }
            
            div[style*="position: fixed"] {
              max-width: 100vw !important;
              width: 100% !important;
              overflow: hidden !important;
            }
            
            /* Ensure stat boxes and cards fit */
            div[style*="padding: 2.5rem"],
            div[style*="padding: 2rem"],
            div[style*="padding: 1.5rem"] {
              width: 100% !important;
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
            
            /* Forms */
            input, textarea, select {
              max-width: 100% !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }
            
            form {
              max-width: 100% !important;
              width: 100% !important;
            }
          }
          
          @media (max-width: 480px) {
            /* Even tighter spacing for small screens */
            nav > div {
              padding: 0 0.75rem !important;
            }
            
            nav > div > div:first-child {
              font-size: 1rem !important;
            }
            
            nav > div > div:last-child {
              gap: 0.75rem !important;
              font-size: 0.65rem !important;
            }
            
            div[style*="padding: 0 4rem"],
            div[style*="padding: 0 1.5rem"],
            div[style*="padding: 0 1rem"] {
              padding: 0 0.75rem !important;
            }
            
            div[style*="padding: 2rem"],
            div[style*="padding: 1.5rem"],
            div[style*="padding: 1rem"] {
              padding: 0.75rem !important;
            }
            
            /* Smaller fonts for tiny screens */
            h1[style*="font-size"] {
              font-size: clamp(1.3rem, 7vw, 1.6rem) !important;
              letter-spacing: 0.5px !important;
            }
            
            h2[style*="font-size"],
            h3[style*="font-size"] {
              font-size: clamp(1.1rem, 5vw, 1.3rem) !important;
            }
            
            p[style*="font-size"] {
              font-size: clamp(0.8rem, 3vw, 0.9rem) !important;
              line-height: 1.5 !important;
            }
            
            a[style*="padding"],
            button[style*="padding"] {
              padding: 0.75rem 1rem !important;
              font-size: clamp(0.75rem, 2.5vw, 0.85rem) !important;
            }
            
            div[style*="gap: 3rem"],
            div[style*="gap: 2rem"],
            div[style*="gap: 1.5rem"],
            div[style*="gap: 1rem"] {
              gap: 0.75rem !important;
            }
            
            /* Ensure everything still fits */
            div[style*="max-width"] {
              max-width: 100% !important;
              width: 100% !important;
            }
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

