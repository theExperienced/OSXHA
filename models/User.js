const mongoose = require('mongoose');

const { tenantSchema } = require('./Tenant');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    },
    tenants: [tenantSchema]
});

module.exports = mongoose.model('user', userSchema);