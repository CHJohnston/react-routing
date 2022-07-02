import React from "react";
import { APIService } from "../services/API.service";

export const PeopleView = (props) => {
  const [people, setPeople] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPeople = async () => {
    let data = await APIService.getList("people");
    if (data) setPeople(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchPeople();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <h1>People</h1>
        <div className="row p-4">
          {people.map(({ id, name, gender, age }) => (
            <div key={id} className="card col-sm-4">
              <div className="card-body">
                <h4>{name}</h4>
                <ul>
                  <li class="list-group-item">Gender: {gender}</li>
                  <li class="list-group-item">Age: {age}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
};
