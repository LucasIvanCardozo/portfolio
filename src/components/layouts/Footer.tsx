import styles from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {currentYear} Lucas Iván Cardozo. All rights reserved.
        </p>
        <p className={styles.credits}>
          Built with 
          <a 
            href="https://react.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            React
          </a>
          and 
          <a 
            href="https://vitejs.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Vite
          </a>
          , deployed on 
          <a 
            href="https://vercel.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </p>
      </div>
    </footer>
  )
}
