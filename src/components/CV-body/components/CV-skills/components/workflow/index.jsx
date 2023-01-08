import { Fragment } from "react";

export function Workflow() {
  return (
    <Fragment>
      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Mobile-First, Responsive Design
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Cross Browser Testing & Debugging
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Cross Functional Teams
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Agile Development & Scrum
        </li>
      </ul>
    </Fragment>
  );
}
