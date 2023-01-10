import { AboutContent } from "./components/about-content";
import { AboutIcons } from "./components/about-icons";

export function CVAbout(props) {
  const {firstName , lastName } = props.content
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          {firstName}
          <span className="text-primary"> {lastName}</span>
        </h1>
        <AboutContent content={props.content} />
        <AboutIcons content={props.content} />
      </div>
    </section>
  );
}
