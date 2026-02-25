import styles from './MeDescription.module.css'

export const MeDescription = () => {
  return (
    <div className={styles.container}>
      <h1>
        <strong>Hi, I'm Lucas Cardozo</strong>
      </h1>
      <p>
        Future Computer Engineer passionate about technology, with the ability to transform ideas or problems into solutions. I love the idea of creating tools
        that optimize and simplify the work of future clients.
        <a href="#projects">View Projects</a>
      </p>
    </div>
  )
}
