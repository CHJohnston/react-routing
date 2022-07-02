import React from "react";
import { APIService } from "../services/API.service";

export const FilmsView = (props) => {
  const [list, setList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchFilms = async () => {
    let data = await APIService.getList("films");
    if (data) setList(data);
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
        <h1>Flims</h1>
        <div className="row p-4">
          {list.map(
            ({ id, title, description, release_date, original_title }) => (
              <div key={id} className="card col-sm-4">
                <div className="card-body">
                  <h3>{original_title}</h3>
                  <small>{title}</small>
                  <p>{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    );
};
