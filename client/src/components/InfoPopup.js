import React from "react";
import { Avatar } from "@mui/material";
import "./InfoPopup.css";

function InfoPopup({ closeInfoPopup, user }) {
  
  return (
    <>
      <div className="info-popup-container">
        <div className="info-box">
          <div className="info-top">
            <Avatar src="/broken-image.jpg" />
            <b>{user && user.name}</b>
            <button onClick={() => closeInfoPopup(false)} id="close-btn">
              x
            </button>
          </div>
          <div className="info-bottom">
            <div className=" info-text">
              <b id="head">Name :</b>
              <p>{user && user.name}</p>
            </div>
            <div className=" info-text">
              <b id="head">Email :</b>
              <p>{user && user.email}</p>
            </div>
            <div className=" info-text">
              <b id="head">Gender :</b>
              <p>{user && user.gender}</p>
            </div>
            <div className=" info-text">
              <b id="head">Age :</b>
              <p>{user && user.age}</p>
            </div>
            <div className=" info-text">
              <b id="head">Birth Year :</b>
              <p>{user && user.birth_year}</p>
            </div>
            <div className=" info-text">
              <b id="head">Current Balance :</b>
              <p>{user && user.current_balance} Rs.</p>
            </div>
            
            <div>
              {/*<button  onClick={()=> closeInfoPopup(false)} id="transfer-btn">Transfer Money</button>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPopup;
