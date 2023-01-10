import { Children, Fragment } from "react";

export function LanguagesTools(props) {
  return (
    <Fragment>
      <div className="subheading mb-3">Programming Languages & Tools</div>
      <ul className="list-inline dev-icons">
        {Children.toArray(
          props.content.map((item) => {
            return (
              <li className="list-inline-item">
                <i className={item}></i>
              </li>
            );
          })
        )}
      </ul>
    </Fragment>
  );
}
