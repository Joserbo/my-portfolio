import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "AI Support Agent",
    description:
      "Enterprise AI chatbot with automated responses and API integrations.",
    tech: ["React", "TypeScript", "OpenAI", "ASP.NET"],
    github: "https://github.com/"
  },

  {
    title: "Workflow Automation Platform",
    description:
      "Automation system for managing business workflows and tasks.",
    tech: ["React", "SQL Server", "ASP.NET"],
    github: "https://github.com/"
  },

  {
    title: "AI CRM Assistant",
    description:
      "CRM assistant capable of summarizing conversations and generating responses.",
    tech: ["React", "TypeScript", "OpenAI"],
    github: "https://github.com/"
  }
]

function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects