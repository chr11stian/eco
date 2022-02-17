import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import CuscoCity from "./pages/CuscoCity";
import IncaTrail from "./pages/IncaTrail";
import Login from "./pages/Login";
import TourForm from "./pages/Tours/ToursForm";
import TourList from "./pages/Tours/ToursList";
import ListTours from "./pages/ListTours";
import Contact from "./Contact";
import MuseumCusco from "./pages/MuseumCusco";
import Rainbow from "./pages/Rainbow";
import SacredValley from "./pages/SacredValley";
import Humantay from "./pages/Humantay";

function App() {
  return (
    
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tour" component={Tour} />
          <Route path="/cusco-city" component={CuscoCity} />
          <Route path="/inca-trail" component={IncaTrail} />

          <Route path="/museum-cusco" component={MuseumCusco} />
          <Route path="/rainbow" component={Rainbow} />
          <Route path="/sacred-valley" component={SacredValley} />
          <Route path="/humantay" component={Humantay} />

          <Route path="/login" component={Login} />
          <Route path="/new-tour" component={TourForm} />
          <Route path="/update/:id" component={TourForm} />
          <Route path="/tours" component={TourList} />
          <Route path="/tours-trek" component={ListTours} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
