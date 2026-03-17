import skillsData from '../skills.json'

type SkillCategory = 'frontend' | 'backend' | 'database' | 'languages' | 'tools'

interface Skill {
  name: string
  category: SkillCategory
}

interface SkillsData {
  data: Skill[]
}

const skills: Skill[] = (skillsData as SkillsData).data

export const skillsRepository = {
  getAll: (): Skill[] => skills,
  getByCategory: (category: SkillCategory): Skill[] => skills.filter(skill => skill.category === category),
  getCategories: (): SkillCategory[] => ['frontend', 'backend', 'database', 'languages', 'tools']
}
