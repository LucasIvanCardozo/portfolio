export type GitHubEvent = {
  id: string
  type: 'PushEvent' | 'CreateEvent' | 'PullRequestEvent' | 'IssuesEvent'
  repo: {
    name: string
  }
  payload: {
    commits?: {
      message: string
      author: {
        name: string
        email: string
      }
    }[]
    action?: string
    issue?: {
      title: string
    }
    pull_request?: {
      title: string
    }
  }
  created_at: string
}
