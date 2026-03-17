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
            Future Computer Engineer passionate about technology with the ability to transform ideas or problems into efficient solutions. 
            I specialize in creating tools that optimize and simplify my clients' work.
          </p>
          <p className={styles.description}>
            I'm currently studying Systems Engineering at the National University of Mar del Plata, 
            and I'm looking for opportunities to apply my knowledge in challenging projects.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Years of experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
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
