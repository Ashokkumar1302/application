import React from "react";
//import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
//import AboutPage from "pages/About";
import ProjectRoutes from "./Routes";
//import ContactPage from "pages/Contact";
// import ProjectRoutes from "./Routes";



function App() {
  return (
    <Router>
      <ProjectRoutes/>

    </Router>
  );
}

export default App;
