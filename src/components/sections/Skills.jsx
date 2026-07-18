import { skills } from "../../data/skills";
import SectionWrapper from "../layout/SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with"
      alternate
    >
      <div className="space-y-12">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="mb-6 text-xl font-semibold text-secondary">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-secondary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
