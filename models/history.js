const mongo = require("mongoose");

const HistorySchema = new mongo.Schema({
    
    sender : {
        type : String,
        required : true
    },
    reciver : {
        type : String,
        required : true
    },
    amount : { 
        type : Number,
        required : true
    },
    date : {
         type: String,
         default: (new Date().toLocaleString("en-US", {timeZone:"Asia/Kolkata"}))
    }

})

const History = mongo.model("TransectionHistory", HistorySchema);

module.exports = History;