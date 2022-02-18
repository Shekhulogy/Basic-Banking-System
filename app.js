const express = require("express");
const db = require("./server");
const Router = require("./routes");

const cors = require('cors')

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methdods: "GET, POST"
}
db.connect( "Basic-Banking-System");

app.use(express.json());
app.use(cors(corsOptions));
app.use(Router);

if (process.env.NODE_ENV = "production"){
  app.use(express.static("client/build"));
}

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running at port ${process.env.PORT || 8080}`);
});
