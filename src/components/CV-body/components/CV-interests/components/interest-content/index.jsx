import { Children, Fragment } from "react";

export function InterestsContent(props) {
  return (
    <Fragment>
      {Children.toArray(
        props.content.map((text) => {
          return <p>{text}</p>;
        })
      )}
    </Fragment>
  );
}
