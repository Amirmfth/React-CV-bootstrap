import { AwardsContent } from "./components/awards-content";

export function CVAwards() {
  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Certifications</h2>
        <AwardsContent />
      </div>
    </section>
  );
}
