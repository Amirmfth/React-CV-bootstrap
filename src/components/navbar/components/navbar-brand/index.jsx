import logo from '../../../../../assets/img/myProfile.jpg'

export function NavbarBrand() {
  return (
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Amir mohammad Fatahi</span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={logo}
          alt="..."
        />
      </span>
    </a>
  );
}
