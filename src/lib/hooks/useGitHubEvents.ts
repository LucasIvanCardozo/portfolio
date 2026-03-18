import { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'LucasIvanCardozo'

interface CommitDay {
  date: string
  count: number
}

export function useGitHubEvents() {
  const [commitDays, setCommitDays] = useState<CommitDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalCommits, setTotalCommits] = useState(0)

  useEffect(() => {
    async function fetchEvents() {
      const token = import.meta.env.VITE_GITHUB_TOKEN
      
      if (!token) {
        setError('GitHub token not configured')
        setLoading(false)
        return
      }

      try {
        // Calculate date range (last year)
        const today = new Date()
        const oneYearAgo = new Date(today)
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
        
        // Format as ISO 8601 with timezone (required by GraphQL)
        const fromDate = oneYearAgo.toISOString()
        const toDate = today.toISOString()

        // Use GitHub GraphQL API
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query($username: String!, $from: DateTime!, $to: DateTime!) {
                user(login: $username) {
                  contributionsCollection(from: $from, to: $to) {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: {
              username: GITHUB_USERNAME,
              from: fromDate,
              to: toDate
            }
          })
        })

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data')
        }

        const data = await response.json()
        
        if (data.errors) {
          throw new Error(data.errors[0].message)
        }

        const calendar = data.data.user.contributionsCollection.contributionCalendar
        
        // Flatten weeks into days
        const days: CommitDay[] = []
        calendar.weeks.forEach((week: { contributionDays: { date: string; contributionCount: number }[] }) => {
          week.contributionDays.forEach((day) => {
            days.push({
              date: day.date,
              count: day.contributionCount
            })
          })
        })

        setCommitDays(days)
        setTotalCommits(calendar.totalContributions)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return { commitDays, loading, error, totalCommits }
}
