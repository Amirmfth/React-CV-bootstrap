export function CollapseNavbar() {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#experience">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#education">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#interests">
            Interests
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#awards">
            Awards
          </a>
        </li>
      </ul>
    </div>
  );
}
