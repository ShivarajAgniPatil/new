import '../styles/globals.css'
import '../styles/responsive.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Cyanpy - Advanced AI-Powered Education Platform" />
        <title>Cyanpy - Next-Generation AI Education</title>
        <style>{`
          /* Force mobile responsive overrides */
          @media (max-width: 768px) {
            /* Navigation */
            nav > div {
              flex-direction: column !important;
              padding: 0 1.5rem !important;
              gap: 1rem !important;
            }
            
            nav > div > div:first-child {
              font-size: 1.3rem !important;
            }
            
            nav > div > div:last-child {
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 1.5rem !important;
              font-size: 0.75rem !important;
            }
            
            /* Hero and content */
            div[style*="padding: 0 4rem"] {
              padding: 0 1.5rem !important;
            }
            
            div[style*="padding: 4rem"] {
              padding: 2rem !important;
            }
            
            div[style*="padding: 3rem"] {
              padding: 2rem !important;
            }
            
            div[style*="padding: 2rem"] {
              padding: 1.5rem !important;
            }
            
            /* Titles */
            h1[style*="font-size: 5.5rem"],
            h1[style*="5.5rem"] {
              font-size: 2.2rem !important;
              letter-spacing: 2px !important;
            }
            
            h1[style*="font-size: 4.5rem"],
            h1[style*="4.5rem"] {
              font-size: 2rem !important;
            }
            
            h2[style*="font-size: 3.5rem"],
            h3[style*="font-size: 3.5rem"] {
              font-size: 1.8rem !important;
            }
            
            h3[style*="font-size: 2.2rem"],
            h3[style*="font-size: 2rem"],
            h3[style*="font-size: 1.8rem"] {
              font-size: 1.2rem !important;
            }
            
            /* Paragraphs */
            p[style*="font-size: 1.2rem"] {
              font-size: 0.9rem !important;
              line-height: 1.6 !important;
            }
            
            /* Grids */
            div[style*="grid-template-columns: repeat(3"],
            div[style*="grid-template-columns:repeat(3"] {
              grid-template-columns: 1fr !important;
            }
            
            div[style*="grid-template-columns: repeat(auto-fit"] {
              grid-template-columns: 1fr !important;
            }
            
            /* Buttons and links */
            div[style*="display: flex"][style*="gap: 2rem"] {
              flex-direction: column !important;
              gap: 1rem !important;
            }
            
            a[style*="padding: 1.5rem 3rem"] {
              padding: 1rem 2rem !important;
              font-size: 0.9rem !important;
              width: 100%;
              display: block;
              text-align: center;
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
          }
          
          @media (max-width: 480px) {
            nav > div {
              padding: 0 1rem !important;
            }
            
            nav > div > div:first-child {
              font-size: 1.1rem !important;
            }
            
            nav > div > div:last-child {
              gap: 1rem !important;
              font-size: 0.7rem !important;
            }
            
            div[style*="padding: 0 4rem"],
            div[style*="padding: 0 1.5rem"] {
              padding: 0 1rem !important;
            }
            
            div[style*="padding: 2rem"],
            div[style*="padding: 1.5rem"] {
              padding: 1rem !important;
            }
            
            h1[style*="font-size"] {
              font-size: 1.5rem !important;
            }
            
            h2[style*="font-size"],
            h3[style*="font-size"] {
              font-size: 1.2rem !important;
            }
            
            p[style*="font-size"] {
              font-size: 0.85rem !important;
            }
            
            a[style*="padding"] {
              padding: 0.8rem 1.5rem !important;
              font-size: 0.85rem !important;
            }
            
            div[style*="gap: 3rem"],
            div[style*="gap: 1.5rem"] {
              gap: 1rem !important;
            }
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

