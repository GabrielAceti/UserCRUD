const mongoose = require('../../data/Index')

const userSchema = new mongoose.Schema({
codInterno: {type: Number, required: true},
name: {type: String, required: true},
passWord: {type: String, required: true},
email: {type: String, required: true}
});

const user = mongoose.model('User', userSchema);

module.exports = user;