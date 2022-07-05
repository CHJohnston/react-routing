import { useState, useEffect } from "react";
import { APIService } from "../services/API.service";
import { Link } from "react-router-dom";

export const VehiclesView = (props) => {
  const [vehicle, setVehicles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchVehicles = async () => {
    let data = await APIService.getList("vehicles");
    if (data) setVehicles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <h1>Vehicles</h1>
        <div className="row p-4">
          {vehicle.map(({ id, name, description, vehicle_class, pilot }) => (
            <ul key={id} className="list-group">
              <li className="list-group-item">
                {name}
                <Link to={`${id}`}> View More </Link>
              </li>
            </ul>
          ))}
        </div>
      </main>
    );
};
