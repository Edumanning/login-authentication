const EmailCode = require("./EmailCode");
const User = require("./User");


//EmailCode -> userID
User.hasOne(EmailCode) //userId
EmailCode.belongsTo(User)