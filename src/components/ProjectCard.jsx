function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <span className="project-category">
                {project.category}
            </span>

            <h3>{project.title}</h3>

            <h4>{project.subtitle}</h4>

            <p>{project.description}</p>

            <div className="tech-stack">
                {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>

            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                View GitHub →
            </a>
        </article>
    );
}

export default ProjectCard;