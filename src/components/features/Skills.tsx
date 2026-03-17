import styles from './Skills.module.css'
import { skillsRepository } from '../../lib/db/repository/skills'

const BASE_URL = import.meta.env.BASE_URL

// Mapeo de nombres de skills a nombres de archivos de iconos
const iconMapping: Record<string, string> = {
  'Next.js': 'next',
  'Node.js': 'node',
  'HTML5': 'html',
  'CSS3': 'css',
  'C#': 'c-sharp',
}

const getIconFileName = (skillName: string): string => {
  return iconMapping[skillName] ?? skillName.toLowerCase().replace('.', '').replace('#', 'sharp')
}

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Databases',
  languages: 'Languages',
  tools: 'Tools'
}

export const Skills = () => {
  const categories = skillsRepository.getCategories()
  
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>
          Technical skills I've developed through my projects since 2022. These are the technologies and tools I've been mastering while building real-world applications.
        </p>
        
        <div className={styles.categories}>
          {categories.map((category) => {
            const skills = skillsRepository.getByCategory(category)
            return (
              <div key={category} className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>{categoryLabels[category]}</h3>
                <ul className={styles.skillsList}>
                  {skills.map((skill) => (
                    <li key={skill.name} className={styles.skillItem}>
                      <img 
                        src={`${BASE_URL}icons/${getIconFileName(skill.name)}.svg`}
                        alt={skill.name}
                        loading="lazy"
                        className={styles.skillIcon}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      <span className={styles.skillName}>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
