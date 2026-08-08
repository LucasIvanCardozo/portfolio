export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'security'
  | 'testing'
  | 'tools'

export interface Skill {
  name: string
  category: SkillCategory
}

export interface SkillsData {
  data: Skill[]
}
