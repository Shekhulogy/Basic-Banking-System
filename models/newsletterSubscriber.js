const mongo = require("mongoose");

const SubscriberSchema = new mongo.Schema({
    email : {
        type: String,
        required: true,
        unique : true
    }

})

const Subscriber = mongo.model("NewsletterSubscriber", SubscriberSchema);

module.exports = Subscriber;