import { AboutContent } from "./components/about-content";
import { AboutIcons } from "./components/about-icons";

export function CVAbout() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Clarence
          <span className="text-primary">Taylor</span>
        </h1>
        <AboutContent />
        <AboutIcons />
      </div>
    </section>
  );
}
