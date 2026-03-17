export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'languages' | 'tools'
}

export interface SkillsData {
  data: Skill[]
}
