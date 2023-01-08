import { Fragment } from "react";
import { CVBody } from "./components/CV-body";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <Fragment>
      <Navbar />
      <CVBody />
    </Fragment>
  );
}
