import { useState } from 'react'
import { DownloadCVModal } from './DownloadCVModal'
import styles from './MeDescription.module.css'

export const MeDescription = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)

  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <span className={styles.greeting}>Hi! I'm</span>
          <h1 className={styles.name}>
            Lucas <span className={styles.highlight}>Cardozo</span>
          </h1>
          <h2 className={styles.title}>Full-Stack TypeScript Developer · React · Next.js</h2>
          <p className={styles.tagline}>
            Three products in production. Still finishing the degree.
          </p>
          <p className={styles.description}>
            Computer Engineering student at UNMdP, self-taught and product-oriented. Designs and
            builds complete web applications with TypeScript, React, Next.js and Node.js, from data
            modeling to UI implementation. Delivered products to real clients and currently
            developing a SaaS platform for launch.
          </p>
          <p className={styles.description}>
            <strong>Tech Stack:</strong> Next.js 16 · React 19 · TypeScript · Prisma 7 · PostgreSQL
            · Auth.js · Zod
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Production projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>With real clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1</span>
              <span className={styles.statLabel}>Multi-tenant SaaS in launch</span>
            </div>
          </div>
          <div className={styles.cta}>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => setIsDownloadOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isDownloadOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>

      <DownloadCVModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </section>
  )
}
