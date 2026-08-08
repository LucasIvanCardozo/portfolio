import { educationRepository } from '../../lib/db/repository/education'
import styles from './Education.module.css'

export const Education = () => {
  const entries = educationRepository.getAll()

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <p className={styles.subtitle}>Formal training that grounds the self-taught work.</p>

        <div className={styles.grid}>
          {entries.map((entry) => (
            <article key={entry.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.degree}>{entry.degree}</h3>
                <span
                  className={
                    entry.status === 'in_progress' ? styles.statusActive : styles.statusDone
                  }
                >
                  {entry.status === 'in_progress' ? 'In progress' : 'Completed'}
                </span>
              </div>

              <p className={styles.institution}>{entry.institution}</p>
              <p className={styles.period}>{entry.period}</p>

              {entry.status === 'in_progress' && typeof entry.progress === 'number' && (
                <div className={styles.progress}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${entry.progress}%` }}
                      role="progressbar"
                      aria-valuenow={entry.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${entry.degree} progress`}
                    />
                  </div>
                  <span className={styles.progressLabel}>{entry.progress}% · Fourth year</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
