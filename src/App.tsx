import styles from './App.module.css'
import { MeComponent } from './components/features/MeComponent'
import { MeDescription } from './components/features/MeDescription'
import { ProyectCard } from './components/features/ProyectCard'
import { Footer } from './components/layouts/Footer'
import { proyectsRepository } from './lib/db/repository/proyects'

export default function App() {
  const proyects = proyectsRepository.getAll()
  return (
    <>
      <main className={styles.main}>
        <MeDescription />
        <MeComponent />
      </main>
      <section id="Projects" className={styles.projects}>
        <h1>Projects</h1>
        <p>Showcasing some of my recent work and achievements.</p>
        <ul className={styles.projectUl}>
          {proyects.map((proyect, index) => (
            <ProyectCard key={index} proyect={proyect} wrapper="li" />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  )
}
