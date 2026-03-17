import type { Proyect } from '../../types/proyects'
import styles from './ProyectCard.module.css'
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

export const ProyectCard = ({ proyect, wrapper: Wrapper = 'div' }: { proyect: Proyect; wrapper?: keyof JSX.IntrinsicElements }) => {
  const { title, description, urlProyect, techs } = proyect
  
  return (
    <Wrapper className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          src={`${BASE_URL}images/proyects/${title.toLowerCase().replaceAll(' ', '')}.png`} 
          alt={`Screenshot of ${title} project`}
          loading="lazy"
        />
        <div className={styles.imageOverlay}>
          <span className={styles.viewProject}>View Project</span>
        </div>
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
        
        <a 
          href={urlProyect} 
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
      </div>
    </Wrapper>
  )
}
