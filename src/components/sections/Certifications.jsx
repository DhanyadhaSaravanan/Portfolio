import { certifications } from "../../data/certifications";
import SectionWrapper from "../layout/SectionWrapper";
import CertCard from "../ui/CertCard";

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and certifications"
      alternate
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <CertCard key={cert.id ?? cert.title} {...cert} />
        ))}
      </div>
    </SectionWrapper>
  );
}
