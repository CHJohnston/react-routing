import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIService } from "../services/API.service";

export const PlacesView = (props) => {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchPleaces = async () => {
    let data = await APIService.getList("locations");
    if (data) setPlace(data);
    setIsLoading(false);
  };

  useEffect(() => {
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
