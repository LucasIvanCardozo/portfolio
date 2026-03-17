export type ProjectDB = {
  data: Project[]
}

export type Project = {
  title: string
  description: string
  urlProject: string
  urlGitHub: string
  techs: string[]
}
