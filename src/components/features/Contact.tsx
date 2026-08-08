import { socialNetworkRepository } from '../../lib/db/repository/socialNetwork'
import styles from './Contact.module.css'

export const Contact = () => {
  const socialList = socialNetworkRepository.getAll()
  const emailEntry = socialList.find(({ href }) => href.startsWith('mailto:'))
  const channels = socialList.filter(({ href }) => !href.startsWith('mailto:'))
  const emailAddress = emailEntry?.href.replace('mailto:', '') ?? ''

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>
            Three products in production. Currently open to freelance work and full-time
            opportunities.
          </p>
        </header>

        {emailEntry && (
          <a
            href={emailEntry.href}
            className={styles.primaryCta}
            aria-label={`Send an email to ${emailAddress}`}
          >
            <div className={styles.ctaStatus}>
              <span className={styles.statusDot} aria-hidden="true">
                <span className={styles.statusPulse} />
              </span>
              <span className={styles.statusText}>Open to work</span>
              <span className={styles.statusMeta} aria-hidden="true">
                Mar del Plata, AR · GMT-3
              </span>
            </div>

            <div className={styles.ctaBody}>
              <div className={styles.ctaIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2.5" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </div>
              <div className={styles.ctaContent}>
                <span className={styles.ctaLabel}>Email</span>
                <span className={styles.ctaValue}>{emailAddress}</span>
              </div>
              <div className={styles.ctaArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </a>
        )}

        <div className={styles.channelsBlock}>
          <span className={styles.channelsLabel}>Also reachable on</span>
          <div className={styles.channels}>
            {channels.map(({ href, name, label }) => {
              const iconName = name === 'github' ? 'githubWhite' : name
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channel}
                  aria-label={`Open ${label} profile in a new tab`}
                >
                  <img
                    src={`/portfolio/icons/${iconName}.svg`}
                    alt=""
                    loading="lazy"
                    className={styles.channelIcon}
                  />
                  <span className={styles.channelName}>{label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
