import { CollapseNavbar } from "./components/collaps-navbar";
import { NavbarToggler } from "./components/navbar-toggler";
import { NavbarBrand } from "./components/navbar-brand";

export function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <NavbarBrand content={props.content} />
      <NavbarToggler />
      <CollapseNavbar />
    </nav>
  );
}
