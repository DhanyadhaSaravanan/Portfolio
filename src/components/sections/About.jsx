import { profile } from "../../data/profile";
import SectionWrapper from "../layout/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know more about my background and aspirations"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {/* Professional Summary */}
        <div className="rounded-xl border-l-4 border-primary bg-white p-6 shadow-sm md:col-span-3 lg:col-span-1">
          <h3 className="mb-3 text-lg font-semibold text-secondary">
            Professional Summary
          </h3>
          <p className="text-sm leading-relaxed text-muted">{profile.summary}</p>
        </div>

        {/* Education */}
        <div className="rounded-xl border-l-4 border-primary bg-white p-6 shadow-sm md:col-span-3 lg:col-span-1">
          <h3 className="mb-4 text-lg font-semibold text-secondary">
            Education
          </h3>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.degree} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <h4 className="font-medium text-secondary">{edu.degree}</h4>
                <p className="text-sm text-primary">{edu.institution}</p>
                <p className="text-xs text-muted">{edu.period}</p>
                <p className="mt-1 text-sm text-muted">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Objective */}
        <div className="rounded-xl border-l-4 border-primary bg-white p-6 shadow-sm md:col-span-3 lg:col-span-1">
          <h3 className="mb-3 text-lg font-semibold text-secondary">
            Career Objective
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {profile.careerObjective}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
