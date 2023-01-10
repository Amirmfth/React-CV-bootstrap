export function AboutIcons(props) {
  const {gitHub , linkedin} = props.content
  return (
    <div className="social-icons">
      <a className="social-icon" href={linkedin}>
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a className="social-icon" href={gitHub}>
        <i className="fab fa-github"></i>
      </a>
      <a className="social-icon" href="#!">
        <i className="fab fa-twitter"></i>
      </a>
      <a className="social-icon" href="#!">
        <i className="fab fa-facebook-f"></i>
      </a>
    </div>
  );
}
