import type { Proyect } from '../../types/proyects'
import styles from './ProyectCard.module.css'
import type { JSX } from 'react'

export const ProyectCard = ({ proyect, wrapper: Wrapper = 'div' }: { proyect: Proyect; wrapper?: keyof JSX.IntrinsicElements }) => {
  const { title, description, urlProyect, techs } = proyect
  return (
    <Wrapper className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={urlProyect} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <div className={styles.imageContainer}>
        <img src={`/src/assets/images/proyects/${title.toLowerCase().replaceAll(' ', '')}.png`} alt={title} loading="lazy" />
      </div>
      <ul className={styles.techs}>
        {techs.map((tech) => (
          <li key={tech}>
            <img src={`/icons/${tech}.svg`} alt={tech} loading="lazy" />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
