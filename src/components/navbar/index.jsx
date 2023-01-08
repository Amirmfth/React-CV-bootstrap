import { CollapseNavbar } from "./components/collaps-navbar";
import { NavbarToggler } from "./components/navbar-toggler";
import { NavbarBrand } from "./components/navbar-brand";

export function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <NavbarBrand />
      <NavbarToggler />
      <CollapseNavbar />
    </nav>
  );
}
