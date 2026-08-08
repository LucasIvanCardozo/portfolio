import styles from './App.module.css'
import { Contact } from './components/features/Contact'
import { Education } from './components/features/Education'
import { MeComponent } from './components/features/MeComponent'
import { MeDescription } from './components/features/MeDescription'
import { ProjectRow } from './components/features/ProjectRow'
import { Skills } from './components/features/Skills'
import { Footer } from './components/layouts/Footer'
import { projectsRepository } from './lib/db/repository/projects'

export default function App() {
  const projects = projectsRepository.getAll()

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <MeDescription />
        <MeComponent />
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>Five products in production, three with real clients.</p>
          <ul className={styles.projectUl}>
            {projects.map((project) => (
              <ProjectRow key={project.title} project={project} wrapper="li" />
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
