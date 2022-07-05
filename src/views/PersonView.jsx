import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { APIService } from "../services/API.service";

export const PersonView = (props) => {
  const [person, setPeople] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  console.log(location);

  const fetchPerson = async () => {
    let data = await APIService.getItem("people", id);
    if (data) setPeople(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  if (isLoading) {
    return <h5>Loading.... </h5>;
  } else
    return (
      <main>
        <div className="container">
          <h3>{person.name}</h3>
          <ul>
            <li>Gender: {person.gender}</li>
            <li>Age: {person.age}</li>
          </ul>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </main>
    );
};
