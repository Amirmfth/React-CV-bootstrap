import { Children } from "react";
import { EducationBox } from "./components/education-box";
import { Highschool } from "./components/high-school";
import { University } from "./components/university";

export function CVEducation(props) {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        {Children.toArray(props.content.map((education) => <EducationBox content={education} />))}
      </div>
    </section>
  );
}
