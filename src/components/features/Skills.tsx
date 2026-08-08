import { skillsRepository } from '../../lib/db/repository/skills'
import styles from './Skills.module.css'

const BASE_URL = import.meta.env.BASE_URL

// Mapeo de nombres de skills a nombres de archivos de iconos
const iconMapping: Record<string, string> = {
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  SQL: 'sql',
  HTML5: 'html',
  CSS3: 'css',

  React: 'react',
  'Next.js': 'next',
  Vite: 'vite',
  'React Hook Form': 'react-hook-form',
  Zod: 'zod',
  'CSS Modules': 'css-modules',
  'Tailwind CSS': 'tailwind',
  Konva: 'konva',

  'Node.js': 'node',
  Soketi: 'soketi',
  'Multi-tenant architecture': 'architecture',

  PostgreSQL: 'postgresql',
  Prisma: 'prisma',

  'Auth.js': 'authjs',
  JWT: 'jwt',
  bcrypt: 'bcrypt',
  'Tenant-safe routing': 'tenantsaferouting',
  Vitest: 'vitest',
  Playwright: 'playwright',
  'Lighthouse budgets': 'lighthousebudgets',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'vscode',
  Neovim: 'neovim',
  Biome: 'biome',
  pnpm: 'pnpm',
  Linux: 'linux',
  nginx: 'nginx',
  Vercel: 'vercel',
}

const getIconFileName = (skillName: string): string => {
  return iconMapping[skillName] ?? skillName.toLowerCase().replace(/[^a-z0-9]/g, '')
}

const categoryLabels: Record<string, string> = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Databases',
  security: 'Security',
  testing: 'Testing',
  tools: 'Tools',
}

export const Skills = () => {
  const categories = skillsRepository.getCategories()

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className={styles.container}>
        <h2 id="skills-heading" className={styles.title}>
          Technical Skills
        </h2>
        <p className={styles.subtitle}>The stack used to ship 5 production projects since 2022.</p>

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
                        alt=""
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
                <span className={styles.count}>
                  {skills.length}
                  <span className="sr-only"> skills</span>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
