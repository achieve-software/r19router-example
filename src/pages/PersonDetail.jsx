import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif"
const PersonDetail = () => {
  // const {state:person} =useLocation()
  const navigate = useNavigate();  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false) 
   const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true)
          new Error("user can not be found")     // console.log(res);
        }
       return res.json();
      })
      .then((data) => {
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []); 
   if(error){   
     return (
      <>
      <NotFound/>
{/* <h1 className="text-center text-danger"> oohn no, something went wrong </h1> */}</>
    )  }
    
     else {
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
  };  }
  export default PersonDetail;