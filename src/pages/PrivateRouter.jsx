import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";
const PrivateRouter = () => {
  // Bu kısım gerçekte Global State'lerde tutulur.(Context API,Redux,Mobx)
  //! const isSigned = userContext(jwt)  
   const isSigned = false
  //   return <div> {isSigned ? <Outlet /> : <Login />} </div>;
  return <div> {isSigned ? <Outlet /> : <Navigate to="/login" />} </div>;
};
export default PrivateRouter;
