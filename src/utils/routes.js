import { HomeView } from "../views/HomeView";
import { FilmsView } from "../views/FilmsView";
import { FilmDetails } from "../views/FilmDetails";
import { PlacesView } from "../views/PlacesView";
import { PlaceView } from "../views/PlaceView";
import { PeopleView } from "../views/PeopleView";
import { PersonView } from "../views/PersonView";
import { VehiclesView } from "../views/VehiclesView";
import { VehicleView } from "../views/VehicleView";

export const routes = [
  {
    path: "/",
    element: <HomeView />,
    title: "Home",
    isNavLink: true,
  },
  {
    path: "films",
    element: <FilmsView />,
    title: "Films",
    isNavLink: true,
  },

  {
    path: "films/:id",
    element: <FilmDetails />,
    title: "Film",
    isNavLink: false,
  },
  {
    path: "places",
    element: <PlacesView />,
    title: "Places",
    isNavLink: true,
  },
  {
    path: "places/:id",
    element: <PlaceView />,
    title: "Place",
    isNavLink: false,
  },
  {
    path: "people",
    element: <PeopleView />,
    title: "People",
    isNavLink: true,
  },
  {
    path: "people/:id",
    element: <PersonView />,
    title: "Person",
    isNavLink: false,
  },
  {
    path: "vehicles",
    element: <VehiclesView />,
    title: "Vehicles",
    isNavLink: true,
  },
  {
    path: "vehicles/:id",
    element: <VehicleView />,
    title: "Vehicle",
    isNavLink: false,
  },
];
