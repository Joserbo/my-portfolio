const skills = [
  "AI Agent Building",
  "API Development",
  "Full-Stack Development",
  "ASP.NET Core",
  "React",
  "TypeScript"
]

function Skills() {
  return (
    <section className="py-12">
      <h3 className="text-3xl font-bold mb-6">
        Skills
      </h3>

      <ul className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills