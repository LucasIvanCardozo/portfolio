import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <p>© {new Date().getFullYear()} All rights reserved</p>
        <p>
          Created by{' '}
          <b>
            <a href="https://www.linkedin.com/in/lucas-ivan-cardozo/" target="_blank" rel="noopener noreferrer">
              Lucas Cardozo
            </a>
          </b>{' '}
          with{' '}
          <b>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </b>
        </p>
      </div>
    </footer>
  )
}
