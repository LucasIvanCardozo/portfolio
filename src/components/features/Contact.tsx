import styles from './Contact.module.css'
import { socialNetworkRepository } from '../../lib/db/repository/socialNetwork'

export const Contact = () => {
  const socialList = socialNetworkRepository.getAll()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Work Together</h2>
        <p className={styles.subtitle}>I'm available for new projects and opportunities. Get in touch!</p>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.label}>Email</span>
                <a href="mailto:lucasivancardozo27@gmail.com" className={styles.value}>
                  lucasivancardozo27@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>Mar del Plata, Argentina</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.label}>Availability</span>
                <span className={styles.value}>Immediate</span>
              </div>
            </div>
          </div>

          <div className={styles.social}>
            <p className={styles.socialTitle}>You can also find me on:</p>
            <div className={styles.socialLinks}>
              {socialList.map(({ href, name }, index) => {
                const iconName = name === 'github' ? 'githubWhite' : name
                return (
                  <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={`Visit my ${name}`}>
                    <img src={`/portfolio/icons/${iconName}.svg`} alt={name} loading="lazy" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
