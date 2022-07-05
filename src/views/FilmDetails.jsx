import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { APIService } from "../services/API.service";

export const FilmDetails = (props) => {
  const [film, setList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();
  
  const location = useLocation();
  console.log(location);

  const fetchFilms = async () => {
    let data = await APIService.getItem("films", id);
    if (data) setList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <div className="container">
          <h3>{film.original_title}</h3>
          <small>{film.title}</small>
          <p>{film.description}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </main>
    );
};
