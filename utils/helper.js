const CustomerModel = require("../models/customer");

const updateUserBalance = async (email, amount, type) => {
  try {
    const user = await CustomerModel.findOne({ email });
    if (user) {
      const userBalance = parseFloat(user.current_balance);
      const balance =
        type === "sender" ? userBalance - amount : userBalance + amount;

      await CustomerModel.updateOne(
        { email },
        {
          $set: {
            current_balance: balance,
          },
        }
      );
    }
  } catch (err) {
    console.log("Update_Balance_Error", err);
  }
};

module.exports = { updateUserBalance };
