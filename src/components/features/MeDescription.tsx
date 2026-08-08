import styles from './MeDescription.module.css'

export const MeDescription = () => {
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
            <a href="#projects" className={styles.primaryBtn}>
              View My Projects
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
