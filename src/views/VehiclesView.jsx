import React from "react";
import { APIService } from "../services/API.service";

export const VehiclesView = (props) => {
  const [vehicle, setVehicles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchFilms = async () => {
    let data = await APIService.getList("vehicles");
    if (data) setVehicles(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchFilms();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <h1>Vehicles</h1>
        <div className="row p-4">
          {vehicle.map(({ id, name, description, vehicle_class, pilot }) => (
            <div key={id} className="card col-sm-4">
              <div className="card-body">
                <h3>{name}</h3>
                <h4>Vehicle Class: {vehicle_class}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
};
