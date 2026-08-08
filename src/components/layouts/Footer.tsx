import { socialNetworkRepository } from '../../lib/db/repository/socialNetwork'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const

export const Footer = () => {
  // Connect block: reuses social data, omits WhatsApp (already prominent in the Contact section)
  const connectLinks = socialNetworkRepository
    .getAll()
    .filter((s) => s.name !== 'whatsapp')
    .map((s) => ({ label: s.label, href: s.href }))

  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <p className={styles.name}>Lucas Cardozo</p>
          <p className={styles.title}>Full-Stack TypeScript Developer · React · Next.js</p>
          <p className={styles.location}>Mar del Plata, Argentina</p>
        </div>

        <nav className={styles.column} aria-label="Site sections">
          <h2 className={styles.columnTitle}>Navigate</h2>
          <ul className={styles.columnList}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.columnLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.column} aria-label="Contact channels">
          <h2 className={styles.columnTitle}>Connect</h2>
          <ul className={styles.columnList}>
            {connectLinks.map(({ label, href }) => {
              const isExternal = href.startsWith('http')
              return (
                <li key={href}>
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={styles.columnLink}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className={styles.divider} aria-hidden="true" />

      <div className={styles.bottom}>
        <p className={styles.copyright}>© {currentYear} Lucas Iván Cardozo. All rights reserved.</p>
        <p className={styles.credits}>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            Vite
          </a>
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
            GitHub Pages
          </a>
        </p>
      </div>
    </footer>
  )
}
