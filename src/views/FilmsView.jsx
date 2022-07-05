import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIService } from "../services/API.service";

export const FilmsView = (props) => {
  const [list, setList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchFilms = async () => {
    let data = await APIService.getList("films");
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
        <h1>Flims</h1>
        <div className="row p-4">
          {list.map(
            ({ id, title, description, release_date, original_title }) => (
              <div key={id} className="card col-sm-4">
                <div className="card-body">
                  <h3>{original_title}</h3>
                  <small>{title}</small>
                  <Link to={`${id}`}> View More </Link>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    );
};
