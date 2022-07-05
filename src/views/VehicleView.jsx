import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { APIService } from "../services/API.service";

export const VehicleView = (props) => {
  const [vehicle, setVehicles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  console.log(location);

  const fetchVehicle = async () => {
    let data = await APIService.getItem("vehicles", id);
    if (data) setVehicles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchVehicle();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <div className="container">
          <h3>{vehicle.name}</h3>
          <h4>Vehicle Class: {vehicle.vehicle_class}</h4>
          <p>{vehicle.description}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </main>
    );
};
