import { CVAbout } from "./components/CV-about";
import { CVAwards } from "./components/CV-awards";
import { CVEducation } from "./components/CV-education";
import { CVExperience } from "./components/CV-experiance";
import { CVInterests } from "./components/CV-interests";
import { CVSkills } from "./components/CV-skills";

export function CVBody() {
    return (
        <div className="container-fluid p-0">
        <CVAbout />
        <hr className="m-0" />
        <CVExperience />
        <hr className="m-0" />
        <CVEducation />
        <hr className="m-0" />
        <CVSkills />
        <hr className="m-0" />
        <CVInterests />
        <hr className="m-0" />
        <CVAwards />
      </div>
    )
}