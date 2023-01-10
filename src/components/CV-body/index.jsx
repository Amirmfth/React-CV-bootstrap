import { CVAbout } from "./components/CV-about";
import { CVAwards } from "./components/CV-awards";
import { CVEducation } from "./components/CV-education";
import { CVExperience } from "./components/CV-experiance";
import { CVInterests } from "./components/CV-interests";
import { CVSkills } from "./components/CV-skills";

export function CVBody(props) {
  const { about, experience, education, skills, interests, awards } = props;
  return (
    <div className="container-fluid p-0">
      <CVAbout content={about} />
      <hr className="m-0" />
      <CVExperience content={experience} />
      <hr className="m-0" />
      <CVEducation content={education} />
      <hr className="m-0" />
      <CVSkills content={skills} />
      <hr className="m-0" />
      <CVInterests content={interests} />
      <hr className="m-0" />
      <CVAwards content={awards} />
    </div>
  );
}
