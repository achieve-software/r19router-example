import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
const PersonDetail = () => {
  // const {state:person} =useLocation()
  const navigate = useNavigate();  const { id } = useParams();
  const [person, setPerson] = useState([]);  
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true) 
   const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true)
          setLoading(false)
          throw new Error("User can not be found");
        }
        console.log(res);
        return res.json();      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);if(error) {
  return (
    <>
    <NotFound/>
   {/* <h1 className="text-center text-danger"> ooh no, something went wrong </h1> */}
   </>
  )
} else if (loading){
  <div className="text-center spinner-border" role="status">
  <span className="sr-only"> Loading..</span> </div>
}else {
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
};
}
export default PersonDetail;