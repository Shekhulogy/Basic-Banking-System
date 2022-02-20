import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function TransectionHistory() {
  const [transections, setTransections] = useState([]);

  useEffect(() => {
    axios
      .get("https://basicbankingsystembbs.herokuapp.com/transection-history")
      .then((res) => setTransections(res.data));
  }, []);

  return (
    <>
      <div className="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Transection ID</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Transferd Money</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {transections &&
              transections.map((curTransecton, i) => (
                <tr key={curTransecton._id}>
                  <td data-label="S.No.">{i + 1}</td>
                  <td data-label="Transacion Id">{curTransecton._id}</td>
                  <td data-label="Sender">{curTransecton.sender}</td>
                  <td data-label="Receiver">{curTransecton.reciver}</td>
                  <td data-label="Transferd Money">{curTransecton.amount}</td>
                  <td data-label="Date">{curTransecton.date.slice(0, 9)}</td>
                  <td data-label="Time">{curTransecton.date.slice(11, 19)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransectionHistory;
