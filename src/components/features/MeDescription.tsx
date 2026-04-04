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
          <h2 className={styles.title}>Full Stack Developer & Software Engineer</h2>
          <p className={styles.description}>
            <strong>Full Stack Developer</strong> specializing in the <strong>React, Next.js, and TypeScript</strong> ecosystem. I build modern, scalable web
            applications with robust frontend architecture and solid backend using <strong>PostgreSQL</strong>.
          </p>
          <p className={styles.description}>
            Currently studying <strong>Systems Engineering</strong> at Universidad Nacional de Mar del Plata. I&apos;ve built complex web applications with
            transaction management, reporting, and intelligent features. I also created QR solutions for restaurants and interactive systems{' '}
            <strong>designed to scale for 1000+ users</strong>.
          </p>
          <p className={styles.description}>
            <strong>Tech Stack:</strong> React · Next.js · TypeScript · Node.js · PostgreSQL · Vite · Vercel
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Years of experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Projects completed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Commitment to quality</span>
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
