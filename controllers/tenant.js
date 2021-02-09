
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const User = require("../models/User");
const Tenant = require("../models/Tenant");





///////////////////////////////////GETTING 





exports.getTenantsByName = (req, res, next) => {
    const { name } = req.params;
    const userId = req.userId;
    
    // User.find({_id: ObjectId(userId), 'tenants.name': name})
    return User.findById(userId)
        .then(user =>{
            const namedTenants = user.tenants.filter(tenant => tenant.name === name);
            return res.status(200).json({tenants: namedTenants})
        })
        .catch(err =>{
            return res.status(400).json({err});
        })
};

exports.getAllTenants = (req, res, next) => {
    const userId = req.userId;

    return User.findById(userId)
    // .aggregate([
        
    //     {$project: { _id: -1, tenants: 1}}
    // ])
    // .exec((err, tenants) => {
    //     console.log('TENENATS In FETCHING ALL', tenants);
    //     if(err) {
    //         return res.status(404).json({err});
    //     }
//     // })
        .then(user =>{
             return  res.status(200).json({tenants: user.tenants});
        })
        .catch(err =>{
            return res.status(400).json({err});
        })
};

exports.getDebtfulTenants = (req, res, next) => {
    const userId = req.userId;

    return User.findById(userId)
        .then(user =>{
            const debtfulTenants = user.tenants.filter(tenant => tenant.debt !== 0);

            return res.status(200).json({tenants: debtfulTenants});
        })
        .catch(err =>{
            return res.status(400).json({err});
        })
};

exports.getDebtlessTenants = (req, res, next) => {
    const userId = req.userId;

    return User.findById(userId)
        .then(user =>{
            const debtlessTenants = user.tenants.filter(tenant => tenant.debt === 0);

            return res.status(200).json({tenants: debtlessTenants});
        })
        .catch(err =>{
            return res.status(400).json({err});
        })
};




///////////////////////////////////POSTING 





exports.postNewTenant = (req, res, next) => {
    const { tenantInfo } = req.body;
    const userId = req.userId;

    return User.findByIdAndUpdate(userId, { $push: { tenants: { $each: [ tenantInfo ] }}, $sort: { name: 1, addres: 1}})
        .then(user => {
            return res.status(200).json(userId);
        })
        .catch(err => {
            return res.status(400).json(err);
        });
};

exports.putUpdateTenant = (req, res, next) => {             //////////////ASSUMING EVEN WITH ***ALL*** INFO FIELDS PROVIDED - NO DUPLICATES
    const { tenantInfo } = req.body;
    const { _id, name, phone, address, debt } = tenantInfo;
    const userId = req.userId;

    return User.findOneAndUpdate({_id: ObjectId(userId), 'tenants._id': ObjectId(_id)}, { $set: { 'tenants.$.name': name, 'tenants.$.phone': phone, 'tenants.$.address': address, 'tenants.$.debt': debt }})
        .then(result => {
            return res.status(200).json({tenantInfo});
        })
        .catch(err => {
            return res.status(400).json({err});
        });
};

exports.deleteTenant = (req, res, next) => {
    const { tenantId } = req.body;
    const userId = req.userId;
    return User.findByIdAndUpdate(userId, { $pull: { tenants: { _id: tenantId }}})
        .then(result => {
            return res.status(200).json({tenantId});
        })
        .catch(err => {
            return res.status(404).json({err});
        });
};