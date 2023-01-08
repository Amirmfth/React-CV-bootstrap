import { Highschool } from "./components/high-school";
import { University } from "./components/university";

export function CVEducation() {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <University />
        <Highschool />
      </div>
    </section>
  );
}
