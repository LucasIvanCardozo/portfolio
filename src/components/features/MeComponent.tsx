import { socialNetworkRepository } from '../../lib/db/repository/socialNetwork'
import styles from './MeCOmponent.module.css'

export const MeComponent = () => {
  const socialList = socialNetworkRepository.getAll()
  return (
    <div className={styles.container}>
      <img className={styles.me} src="/portfolio/images/me.webp" alt="Lucas Iván Cardozo" />
      <ul className={styles.ul}>
        {socialList.map(({ href, name }) => (
          <li key={name}>
            <a href={href} target="_blank" rel="noopener">
              <img src={`/portfolio/icons/${name}.svg`} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
