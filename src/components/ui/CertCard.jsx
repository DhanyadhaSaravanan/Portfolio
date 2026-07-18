import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "./Button";

export default function CertCard({ title, organization, date, url }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-secondary">{title}</h3>
        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary">
          {date}
        </span>
      </div>
      <p className="mb-4 text-sm text-muted">{organization}</p>
      {url && (
        <Button
          href={url}
          variant="outline"
          className="px-4 py-2 text-sm"
          aria-label={`View certificate: ${title}`}
        >
          <FaExternalLinkAlt aria-hidden="true" />
          View Certificate
        </Button>
      )}
    </article>
  );
}
