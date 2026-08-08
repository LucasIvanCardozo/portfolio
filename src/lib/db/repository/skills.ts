import type { Skill, SkillCategory, SkillsData } from '../../../types/skills'
import skillsData from '../skills.json'

const skills: Skill[] = (skillsData as SkillsData).data

export const skillsRepository = {
  getAll: (): Skill[] => skills,
  getByCategory: (category: SkillCategory): Skill[] =>
    skills.filter((skill) => skill.category === category),
  getCategories: (): SkillCategory[] => [
    'languages',
    'frontend',
    'backend',
    'database',
    'security',
    'testing',
    'tools',
  ],
}
