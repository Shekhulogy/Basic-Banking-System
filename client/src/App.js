import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TransectionHistory from "./components/TransectionHistory";
import ViewAllCustomer from "./components/ViewAllCustomer";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/viewallcustomers" element={<ViewAllCustomer/>} />
        <Route exact path="/transectionhistory" element={<TransectionHistory/>}/>
        <Route exact path="*" element={<Error/>} />
      </Routes>
      
    </>
  );
}

export default App;
