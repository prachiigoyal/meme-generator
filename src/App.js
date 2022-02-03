import React, { Fragment } from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MemeGenerator />
    </React.Fragment>
  );
};

export default App;
