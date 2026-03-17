import styles from './App.module.css'
import { MeDescription } from './components/features/MeDescription'
import { MeComponent } from './components/features/MeComponent'
import { Skills } from './components/features/Skills'
import { ProyectCard } from './components/features/ProyectCard'
import { Contact } from './components/features/Contact'
import { Footer } from './components/layouts/Footer'
import { proyectsRepository } from './lib/db/repository/proyects'

export default function App() {
  const proyects = proyectsRepository.getAll()
  
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <MeDescription />
        <MeComponent />
      </section>
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Some of the projects I've worked on
          </p>
          <ul className={styles.projectUl}>
            {proyects.map((proyect, index) => (
              <ProyectCard key={index} proyect={proyect} wrapper="li" />
            ))}
          </ul>
        </div>
      </section>
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </>
  )
}
