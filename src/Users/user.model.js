const mongoose = require('mongoose');
let date=Date.now()
const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    timeStamp:{ type: Number, default: date}
})

const User = mongoose.model("user", userSchema);

module.exports = User;
