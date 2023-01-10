import { Children } from "react";

export function AwardsContent(props) {
  return (
    <ul className="fa-ul mb-0">
      {Children.toArray(
        props.content.map((award) => {
          return (
            <li>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              {award}
            </li>
          );
        })
      )}
    </ul>
  );
}
