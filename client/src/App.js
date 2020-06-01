import React from "react";
import "./css/style.css";
import Navbar from "./components/Layout/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Pages/Home";
import Error from "./components/Pages/Error";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/Layout/ScrollToTop";
import ConstructionManagement from "./components/Pages/ConstructionManagement";
import FacilityMaintenance from "./components/Pages/FacilityMaintenance";
import ElectricalContractors from "./components/Pages/ElectricalContractors";
import SiteLocation from "./components/Pages/SiteLocation";
import Plumbing from "./components/Pages/Plumbing";
import ResidentialConstruction from "./components/Pages/ResidentialConstruction";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/services" exact component={Services} />
            <Route
              path="/services/construction-management"
              exact
              component={ConstructionManagement}
            />
            <Route
              path="/services/facility-maintenance"
              exact
              component={FacilityMaintenance}
            />
            <Route
              path="/services/electrical-contractors"
              exact
              component={ElectricalContractors}
            />
            <Route
              path="/services/site-location"
              exact
              component={SiteLocation}
            />
            <Route path="/services/plumbing" exact component={Plumbing} />
            <Route
              path="/services/residential-construction"
              exact
              component={ResidentialConstruction}
            />
            <Route
              path="/client/build/index.html"
              render={() => <Redirect to="/" />}
            />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
