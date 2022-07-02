import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { FilmsView } from "./views/FilmsView";
import { PeopleView } from "./views/PeopleView";
import { PlacesView } from "./views/PlacesView";
import { VehiclesView } from "./views/VehiclesView";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lgnavbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"films"}>
              Films
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"people"}>
              People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"places"}>
              Places
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"vehicles"}>
              Vehicles
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="films" element={<FilmsView />} />
        <Route path="people" element={<PeopleView />} />
        <Route path="places" element={<PlacesView />} />
        <Route path="vehicles" element={<VehiclesView />} />
      </Routes>
    </Router>
  );
};

export default App;
