import { InterestsContent } from "./components/interest-content";

export function CVInterests(props) {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <InterestsContent content={props.content} />
      </div>
    </section>
  );
}
