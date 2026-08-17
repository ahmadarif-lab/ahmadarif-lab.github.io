import { projects } from "../data/portfolio.js";

export function ProjectsSection() {
  return (
    <section>
      <h2>Open Source</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a>
            <p>{project.description}</p>
            <div className="project-meta">
              <span>{project.language}</span>
              <span>★ {project.stars}</span>
              {project.pinned && <span className="project-pin">📌 Pinned</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
