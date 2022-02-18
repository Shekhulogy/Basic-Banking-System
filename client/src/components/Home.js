import React from "react";
import { NavLink } from "react-router-dom";

import audience from "../assets/audience.png";
import transfer from "../assets/transfer.png";
import transaction from "../assets/transaction.png";
import bank1 from "../assets/bank1.jpg";

import { useState } from "react";
import axios from "axios";
import HomePopup from "./HomePopup";

function Home() {
  const [openHomePopup, setOpenHomePopup] = useState(false);
  const [subscriber, setSubscriber] = useState();

  const handleSubscriber = (event) => {
    setSubscriber(event.target.value);
  };

  const submitSubscriber = () => {
    return axios
      .post("http://localhost:8080/subscribers", { email: subscriber })
      .then(() => {
        setSubscriber('')
      });
  };

  return (
    <>
      <div className="intro">
        <img src={bank1} id="bank1-img" alt="#"></img>
        <div class="content">
          <h1>Online Banking</h1>
          <h3>Welcome To National Bank</h3>
        </div>
      </div>

      <div className="middel-section">
        <div className="middel-left">
          <img src={audience} id="audience-img" alt="#"></img>
          <NavLink to="/viewallcustomers">
            <button type="submit" value="All Customer" id="middel-btn">
              Customers
            </button>
          </NavLink>
        </div>

        <div className="middel">
          <img src={transfer} id="transfer-img" alt="#"></img>
          <button
            onClick={() => {
              setOpenHomePopup(true);
            }}
            type="submit"
            value="Transfer Money"
            id="middel-btn"
          >
            Transfer Money
          </button>
        </div>

        <div className="middel-right">
          <img src={transaction} id="transaction-img" alt="#"></img>
          <NavLink to="/transectionhistory">
            <button type="submit" value="Transection History" id="middel-btn">
              Transection History
            </button>
          </NavLink>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer">
          <div className="footer-heading footer-1">
            <h3>About Us</h3>
            <p> National Bank is one of the leading private banks.</p>
          </div>
          <div className="footer-heading footer-2">
            <h3>Contact Us</h3>
            <text>nationalbank@mail.com</text>
          </div>
          <div className="footer-email-section">
            <h3>Join our newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              id="footer-email"
              name="subscriber"
              value={subscriber}
              onChange={handleSubscriber}
            ></input>
            <button
              type="submit"
              id="footer-email-btn"
              onClick={submitSubscriber}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; nationalbank.com | Designed by Shikhar Patel
        </div>
      </div>

      {openHomePopup && <HomePopup closeHomePopup={setOpenHomePopup} />}
    </>
  );
}

export default Home;
