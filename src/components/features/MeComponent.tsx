import styles from './MeCOmponent.module.css'
import { socialNetworkRepository } from '../../lib/db/repository/socialNetwork'

const BASE_URL = import.meta.env.BASE_URL

export const MeComponent = () => {
  const socialList = socialNetworkRepository.getAll()
  return (
    <div className={styles.container} style={{ '--background-url': `url(${BASE_URL}images/meBackground.svg)` } as React.CSSProperties}>
      <img className={styles.me} src={`${BASE_URL}images/me.png`} alt="Lucas Iván Cardozo" />
      <ul className={styles.ul}>
        {socialList.map(({ href, name }, index) => (
          <li key={index}>
            <a href={href} target="_blank">
              <img src={`${BASE_URL}icons/${name}.svg`} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
