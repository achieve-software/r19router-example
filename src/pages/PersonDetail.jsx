import { useLocation, useNavigate, useParams } from "react-router-dom";import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif"
const PersonDetail = () => {
  // const {state:person} =useLocation()
  const navigate = useNavigate();  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          new Error("user can not be found"); // console.log(res);
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div className="text-center" >
      <img src={spinner} alt="spinner" />
      </div>
    );
  } else {
    return (
      <div>
        <div className="container text-center">
          <h3>
            {person?.first_name} {person?.last_name}
          </h3>
          <img className="rounded" src={person?.avatar} alt="" />
          <p>{person?.email}</p>
          <div>
            <button
              onClick={() => navigate("/")}
              className="btn btn-success me-2"
            >
              Go Home
            </button>
            <button onClick={() => navigate(-1)} className="btn btn-warning">
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
};export default PersonDetail;