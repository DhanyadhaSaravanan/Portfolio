import { useEffect, useRef, useState } from "react";
import { getIcon } from "../../utils/icons";

export default function SkillCard({ name, icon, level }) {
  const barRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const Icon = getIcon(icon);

  useEffect(() => {
    const element = barRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xl text-primary">
          <Icon aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h4 className="font-semibold text-secondary">{name}</h4>
          <span className="text-sm text-muted">{level}%</span>
        </div>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency`}
        />
      </div>
    </div>
  );
}
