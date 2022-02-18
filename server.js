//Import the mongoose module
const mongo = require("mongoose");

class Database { // Singleton
  connection = mongo.connection;
  
  constructor() {
    try {
      this.connection
      .on('open', console.info.bind(console, 'Database connection: open'))
      .on('close', console.info.bind(console, 'Database connection: close'))
      .on('disconnected', console.info.bind(console, 'Database connection: disconnecting'))
      .on('disconnected', console.info.bind(console, 'Database connection: disconnected'))
      .on('reconnected', console.info.bind(console, 'Database connection: reconnected'))
      .on('fullsetup', console.info.bind(console, 'Database connection: fullsetup'))
      .on('all', console.info.bind(console, 'Database connection: all'))
      .on('error', console.error.bind(console, 'MongoDB connection: error:'));
    } catch (error) {
      console.error(error);
    }
  }

  async connect(dbName) {
    try {
      await mongo.connect(
       // `mongodb://localhost:${port}/${dbName}`,
        `mongodb+srv://Shekhulogy:shikhar1997@basicbankingsystem.n23bs.mongodb.net/${dbName}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  async close() {
    try {
      await this.connection.close();
    } catch (error) {
      console.error(error);
    }
  }
}

const db = new Database();
module.exports = db;