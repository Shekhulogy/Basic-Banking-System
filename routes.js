const express = require("express");
const CustomerModel = require("./models/customer");
const HistoryModel = require("./models/history");
const SubscriberModel = require("./models/newsletterSubscriber");
const { updateUserBalance } = require("./utils/helper");

const app = express();

app.use(express.json());

app.post("/subscribers", async (request, response) => {
  try {
    const email = request.body.email;

    
      const registerSubscriber = new SubscriberModel({ email });

      await registerSubscriber.save();
      response.send("New Subscriber Added !");
    
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/transection-history", async (request, response) => {
  try {
    const { sender, reciver, amount } = request.body;

    if (sender !== reciver) {
      const registerHistory = new HistoryModel({
        sender,
        reciver,
        amount,
      });

      await registerHistory.save();
      await updateUserBalance(sender, parseFloat(amount), "sender");
      await updateUserBalance(reciver, parseFloat(amount), "reciver");
      response.send("Transaction is Done!");
    } else {
      response.send("sender email and reciver email are same !");
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/transection-history", async (request, response) => {
  const tranjections = await HistoryModel.find({});

  try {
    response.send(tranjections);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  const users = await CustomerModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
