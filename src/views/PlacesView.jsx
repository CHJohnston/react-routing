import React from "react";
import { APIService } from "../services/API.service";

export const PlacesView = (props) => {
  const [place, setPlace] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPleaces = async () => {
    let data = await APIService.getList("locations");
    if (data) setPlace(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchPleaces();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <h1>Locations</h1>
        <div className="row p-4">
          {place.map(({ id, name, climate, terrain, original_title }) => (
            <div key={id} className="card col-sm-4">
              <div className="card-body">
                <h3>{name}</h3>
                <ul>
                  <li>Climate: {climate}</li>
                  <li>Terrain: {terrain}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
};
