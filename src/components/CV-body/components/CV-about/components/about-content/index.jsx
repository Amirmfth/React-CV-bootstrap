import { Fragment } from "react";

export function AboutContent(props) {
  const {address , phoneNumber , email , text } = props.content
  return (
    <Fragment>
      <div className="subheading mb-5">
        {`${address} . ${phoneNumber} . `}
        <a href="mailto: amirmf831380@gmail.com">{email}</a>
      </div>
      <p className="lead mb-5">
        {/* I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition. */}
        {text}
      </p>
    </Fragment>
  );
}
