import styles from './MeCOmponent.module.css'
import { socialNetworkRepository } from '../../lib/db/repository/socialNetwork'

export const MeComponent = () => {
  const socialList = socialNetworkRepository.getAll()
  return (
    <div className={styles.container}>
      <img className={styles.me} src="/src/assets/images/me.png" alt="Lucas Iván Cardozo" />
      <ul className={styles.ul}>
        {socialList.map(({ href, name }, index) => (
          <li key={index}>
            <a href={href} target="_blank">
              <img src={`/icons/${name}.svg`} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
