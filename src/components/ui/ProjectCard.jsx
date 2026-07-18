import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Button from "./Button";

export default function ProjectCard({
  title,
  description,
  technologies,
  tech,
  githubUrl,
  liveUrl,
  image,
}) {
  const tags = technologies ?? tech ?? [];
  const placeholderImage = `https://picsum.photos/seed/${encodeURIComponent(title)}/600/400`;

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={image ?? placeholderImage}
          alt={`${title} preview`}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-secondary">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">{description}</p>

        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(githubUrl || liveUrl) && (
          <div className="flex gap-3">
            {githubUrl && (
              <Button
                href={githubUrl}
                variant="outline"
                className="flex-1 px-4 py-2 text-sm"
                aria-label={`View ${title} on GitHub`}
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </Button>
            )}
            {liveUrl && (
              <Button
                href={liveUrl}
                variant="primary"
                className="flex-1 px-4 py-2 text-sm"
                aria-label={`View live demo of ${title}`}
              >
                <FaExternalLinkAlt aria-hidden="true" />
                Live Demo
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
