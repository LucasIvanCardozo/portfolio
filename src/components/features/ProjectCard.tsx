import type { Project } from '../../types/projects'
import styles from './ProjectCard.module.css'
import type { JSX } from 'react'

const BASE_URL = import.meta.env.BASE_URL

const getTechIconName = (tech: string): string => {
  const techMap: Record<string, string> = {
    'c-sharp': 'c-sharp',
    'c#': 'c-sharp',
    'visual studio': 'visualStudio',
    'visualstudio': 'visualStudio',
    'postgresql': 'postgresql',
    'next.js': 'next',
    'nextjs': 'next',
    'typescript': 'typescript',
    'javascript': 'javascript',
    'html': 'html',
    'css': 'css',
    'jsx': 'jsx',
    'vite': 'vite',
    'sqlite': 'sqlite'
  }
  return techMap[tech.toLowerCase()] || tech.toLowerCase().replace(/[^a-z0-9]/g, '')
}

export const ProjectCard = ({ project, wrapper: Wrapper = 'div' }: { project: Project; wrapper?: keyof JSX.IntrinsicElements }) => {
  const { title, description, urlProject, urlGitHub, techs } = project
  
  return (
    <Wrapper className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          src={`${BASE_URL}images/projects/${title.toLowerCase().replaceAll(' ', '')}.png`} 
          alt={`Screenshot of ${title} project`}
          loading="lazy"
        />
        <a 
          href={urlProject}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageOverlay}
        >
          <span className={styles.viewProject}>
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </span>
        </a>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.techs}>
          {techs.map((tech) => (
            <span key={tech} className={styles.techTag}>
              <img 
                src={`${BASE_URL}icons/${getTechIconName(tech)}.svg`}
                alt={tech}
                loading="lazy"
                className={styles.techIcon}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          <a 
            href={urlProject} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Visit Site
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
          <a 
            href={urlGitHub} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkGitHub}
            aria-label="View source code on GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}
