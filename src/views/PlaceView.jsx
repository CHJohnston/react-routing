import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { APIService } from "../services/API.service";

export const PlaceView = (props) => {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  console.log(location);

  const fetchPlace = async () => {
    let data = await APIService.getItem("locations", id);
    if (data) setPlace(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlace();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <div className="container">
          <h3>{place.name}</h3>
          <ul>
            <li>Climate: {place.climate}</li>
            <li>Terrain: {place.terrain}</li>
          </ul>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </main>
    );
};
