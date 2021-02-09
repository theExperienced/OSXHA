const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tenantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    debt: {
        type: Number,
        required: true
    },
});

module.exports = {
    Tenant: mongoose.model('tenant', tenantSchema),
    tenantSchema
}