import { LanguagesTools } from "./components/languages-tools";
import { Workflow } from "./components/workflow";

export function CVSkills(props) {
  const {langAndTools , workflow} = props.content
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <LanguagesTools content={langAndTools} />
        <Workflow content={workflow} />
      </div>
    </section>
  );
}
