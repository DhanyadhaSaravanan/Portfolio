import { useFadeIn } from "../../hooks/useFadeIn";

export default function SectionWrapper({
  id,
  title,
  subtitle,
  alternate = false,
  children,
}) {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alternate ? "bg-surface" : "bg-white"}`}
    >
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="mb-3 text-3xl font-bold text-secondary md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-muted">{subtitle}</p>
            )}
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
