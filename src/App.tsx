import styles from './App.module.css'
import { MeDescription } from './components/features/MeDescription'
import { MeComponent } from './components/features/MeComponent'
import { Skills } from './components/features/Skills'
import { ProjectCard } from './components/features/ProjectCard'
import { Contact } from './components/features/Contact'
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
      
      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Some of the projects I've worked on
          </p>
          <ul className={styles.projectUl}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} wrapper="li" />
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
