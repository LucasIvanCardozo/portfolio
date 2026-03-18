import styles from './GitHubActivity.module.css'
import { useGitHubEvents } from '../../lib/hooks/useGitHubEvents'

const getLevel = (count: number, maxCount: number): number => {
  if (count === 0) return 0
  const percentage = count / maxCount
  if (percentage <= 0.25) return 1
  if (percentage <= 0.5) return 2
  if (percentage <= 0.75) return 3
  return 4
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export const GitHubActivity = () => {
  const { commitDays, loading, error, totalCommits } = useGitHubEvents()

  if (loading) {
    return (
      <section id="github" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>GitHub Activity</h2>
          <p className={styles.subtitle}>Contribution graph showing consistent work</p>
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <span>Loading activity...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="github" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>GitHub Activity</h2>
          <p className={styles.subtitle}>Contribution graph showing consistent work</p>
          <div className={styles.error}>
            <p>Unable to load GitHub activity</p>
            <p className={styles.errorDetail}>{error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (commitDays.length === 0) {
    return null
  }

  // Group days into weeks (7 days each)
  const weeks: (typeof commitDays)[] = []
  for (let i = 0; i < commitDays.length; i += 7) {
    weeks.push(commitDays.slice(i, i + 7))
  }

  const maxCount = Math.max(...commitDays.map((d) => d.count), 1)

  // Get month labels
  const months: { label: string; weekIndex: number }[] = []
  let lastMonth = -1

  weeks.forEach((week, weekIndex) => {
    const firstValidDay = week.find((d) => d.date)
    if (firstValidDay) {
      const date = new Date(firstValidDay.date)
      const month = date.getMonth()

      if (month !== lastMonth) {
        months.push({
          label: date.toLocaleDateString('en-US', { month: 'short' }),
          weekIndex,
        })
        lastMonth = month
      }
    }
  })

  return (
    <section id="github" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>GitHub Activity</h2>
          <p className={styles.subtitle}>{totalCommits} contributions in the last year</p>
        </div>

        <div className={styles.graphContainer}>
          {/* Month labels */}

          <div className={styles.graphWrapper}>
            {/* Day labels */}
            <div className={styles.dayLabels}>
              <span className={styles.dayLabel}>Mon</span>
              <span className={styles.dayLabel}>Wed</span>
              <span className={styles.dayLabel}>Fri</span>
            </div>
            <div>
              <div className={styles.monthsRow}>
                {months.map((month, i) => (
                  <span key={i} className={styles.monthLabel} style={{ left: `${(month.weekIndex / weeks.length) * 100}%` }}>
                    {month.label}
                  </span>
                ))}
              </div>
              {/* Grid */}
              <div className={styles.grid}>
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className={styles.week}>
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`${styles.day} ${styles[`level${getLevel(day.count, maxCount)}`]}`}
                        title={`${day.count} commits on ${formatDate(day.date)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className={styles.legend}>
            <span className={styles.legendLabel}>Less</span>
            <div className={`${styles.day} ${styles.level0}`} />
            <div className={`${styles.day} ${styles.level1}`} />
            <div className={`${styles.day} ${styles.level2}`} />
            <div className={`${styles.day} ${styles.level3}`} />
            <div className={`${styles.day} ${styles.level4}`} />
            <span className={styles.legendLabel}>More</span>
          </div>
        </div>

        <a href={`https://github.com/LucasIvanCardozo`} target="_blank" rel="noopener noreferrer" className={styles.viewMore}>
          View full profile on GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
