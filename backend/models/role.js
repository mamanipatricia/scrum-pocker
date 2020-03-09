const mongoose = require('mongoose');
mongoose.set('debug', true);

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const role = new mongoose.model('roles', schema);

module.exports = role;
