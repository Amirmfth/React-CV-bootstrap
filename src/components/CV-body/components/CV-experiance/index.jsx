import { SeniorSection } from "./components/senior-web-developer";
import { WebSection } from "./components/web-developer";
import { JuniorSection } from "./components/junior-web-designer";
import { InternSection } from "./components/web-design-intern";
import { Children } from "react";
import { ExperianceBox } from "./components/experiance-box";

export function CVExperience(props) {
  
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {Children.toArray(props.content.map((experiance) => <ExperianceBox content={experiance}/>))}
      </div>
    </section>
  );
}
