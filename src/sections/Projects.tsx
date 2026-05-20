type ProjectCardProps = {
  title: string
  description: string
}

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ProjectCard
        title="AI Agent Integration"
        description="Integrated a custom AI agent into a web application, enabling dynamic content generation and personalized user interactions."
      />
    </section>
  )
}
export default Projects