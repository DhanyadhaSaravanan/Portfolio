import { projects } from "../../data/projects";
import SectionWrapper from "../layout/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A selection of my recent work"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id ?? project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
