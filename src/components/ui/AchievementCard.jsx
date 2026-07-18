import { getIcon } from "../../utils/icons";

export default function AchievementCard({ icon = "FaStar", title, description }) {
  const Icon = getIcon(icon);

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-primary">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-secondary">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
