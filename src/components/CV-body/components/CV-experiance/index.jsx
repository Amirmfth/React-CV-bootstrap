import { SeniorSection } from "./components/senior-web-developer";
import { WebSection } from "./components/web-developer";
import { JuniorSection } from "./components/junior-web-designer";
import { InternSection } from "./components/web-design-intern";

export function CVExperience() {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <SeniorSection />
        <WebSection />
        <JuniorSection />
        <InternSection />
      </div>
    </section>
  );
}
