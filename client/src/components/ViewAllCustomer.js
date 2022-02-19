import React from "react";
import "./ViewAllCustomer.css";

import { useState, useEffect } from "react";

import InfoPopup from "./InfoPopup";
import Popup from "./Popup";
import axios from "axios";

function ViewAllCustomer() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openInfoPopup, setInfoOpenPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [users, setUsers] = useState([]);
  const emails = users.map((user) => user.email != selectedUser.email && user.email);

  useEffect(() => {
    axios.get("https://basicbankingsystembbs.herokuapp.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <div className="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Balance</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((curUser) => (
                <tr key={curUser._id}>
                  <td
                    data-label="S.No."
                    onClick={() => {
                      setInfoOpenPopup(true); 
                      setSelectedUser(curUser);
                    }}
                  >
                    {curUser.s_no}
                  </td>
                  <td
                    data-label="Name"
                    onClick={() => {
                        setInfoOpenPopup(true); 
                        setSelectedUser(curUser);
                      }}
                  >
                    {curUser.name}
                  </td>
                  <td
                    data-label="Email"
                    onClick={() => {
                        setInfoOpenPopup(true); 
                        setSelectedUser(curUser);
                      }}
                  >
                    {curUser.email}
                  </td>
                  <td
                    data-label="Current Balance"
                    onClick={() => {
                        setInfoOpenPopup(true); 
                        setSelectedUser(curUser);
                      }}
                  >
                    {curUser.current_balance}
                  </td>
                  <td
                    data-label="Gender"
                    onClick={() => {
                        setInfoOpenPopup(true); 
                        setSelectedUser(curUser);
                      }}
                  >
                    {curUser.gender}
                  </td>
                  <td data-label="">
                    <a
                      herf="#"
                      class="btn"
                      onClick={() => {
                        setOpenPopup(true); 
                        setSelectedUser(curUser);
                      }}
                    >
                      Transfer Money
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {openPopup && <Popup closePopup={setOpenPopup} reciver={selectedUser} emails={emails}/>}
      {openInfoPopup && <InfoPopup closeInfoPopup={setInfoOpenPopup} user={selectedUser}/>}
    </>
  );
}

export default ViewAllCustomer;
