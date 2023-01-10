import { Children, Fragment } from "react";

export function Workflow(props) {
  return (
    <Fragment>
      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        {Children.toArray(
          props.content.map((item) => {
            return (
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {item}
              </li>
            );
          })
        )}
      </ul>
    </Fragment>
  );
}
