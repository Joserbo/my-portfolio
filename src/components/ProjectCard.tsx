type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  github: string
}

function ProjectCard({
  title,
  description,
  tech,
  github
}: ProjectCardProps) {
  return (
    <div className="border border-gray-700 rounded-2xl p-6 w-full max-w-sm hover:border-gray-500 transition">
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="bg-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        className="inline-block border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        View Project
      </a>
    </div>
  )
}

export default ProjectCard