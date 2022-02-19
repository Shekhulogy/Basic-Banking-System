import React from "react";
import "./popup.css";

import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

function HomePopup({closeHomePopup}) {
  const [amount, setAmount] = useState();
  const [reciver, setReciver] = useState();
  const [sender, setSender] = useState();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios
      .get("https://basicbankingsystembbs.herokuapp.com/users")
      .then((res) => setUsersData(res.data));
  }, []);

  const emails = usersData.map((user) => user.email);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleReciverChange = (value) => {
    setReciver(value);
  };

  const handleSenderChange = (value) => {
    setSender(value);
  };

  const submitTransactionHistory = async (e) => {

    e.preventDefault();

    if (sender !== reciver) {
      await axios.post("https://basicbankingsystembbs.herokuapp.com/transection-history", {
        amount,
        reciver,
        sender,
      });

      alert("!! Transection Successfull !!");

      closeHomePopup(false);
    } else {
      alert("Sender and Reciver should not be same !");
    }
  };

  const emailOptions = [
    { key: "af", value: emails[0], text: emails[0] },
    { key: "ax", value: emails[1], text: emails[1] },
    { key: "al", value: emails[2], text: emails[2] },
    { key: "dz", value: emails[3], text: emails[3] },
    { key: "as", value: emails[4], text: emails[4] },
    { key: "ad", value: emails[5], text: emails[5] },
    { key: "ao", value: emails[6], text: emails[6] },
    { key: "ai", value: emails[7], text: emails[7] },
    { key: "ag", value: emails[8], text: emails[8] },
    { key: "ar", value: emails[9], text: emails[9] },
  ];

  return (
    <>
      <div className="popup-container">
        <form onSubmit={submitTransactionHistory}>
          <div className="popup-box">
            <button
              onClick={() => closeHomePopup(false)}
              type="close"
              id="popup-close-btn"
            >
              x
            </button>

            <div className="dropdown">
              <Dropdown
                placeholder="Select Sender"
                name="reciver"
                fluid
                search
                selection
                value={sender}
                options={emailOptions}
                onChange={(_, data) => handleSenderChange(data.value)}
              />
            </div>

            <div className="dropdown">
              <Dropdown
                placeholder="Select Reciver"
                name="reciver"
                fluid
                search
                selection
                value={reciver}
                options={emailOptions}
                onChange={(_, data) => handleReciverChange(data.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Enter Amount"
              id="popup-input-3"
              name="amount"
              value={amount}
              onChange={(event) => handleAmountChange(event)}
            ></input>
            <button type="action" id="popup-btn-1">
              Trensfer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HomePopup;
