const mongo = require("mongoose");

const CustomerSchema = new mongo.Schema({
    s_no : Number,
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    current_balance : Number,
    gender : String,
    age : Number,
    birth_year : Number
})

const Customer = mongo.model("AllCustomer", CustomerSchema);

module.exports = Customer;