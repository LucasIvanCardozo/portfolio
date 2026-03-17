import type { ProjectDB } from '../../../types/projects'
import projects from '../projects.json'

const { data } = projects as unknown as ProjectDB

export const projectsRepository = {
  getAll: () => data,
}
