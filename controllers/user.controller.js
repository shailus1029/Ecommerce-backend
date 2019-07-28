const mongoose = require('mongoose');
const User = require('../models/user.model');

exports.createUser = function (req, res) {
    const user = new User({
        userId: req.body.userId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile
    })

    user.save(function(err){
        if (err) {
            return next(err);
        }

        res.send("User created successfully");
    });
}

exports.getUserList = function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) {
            return next(err);
        }
        res.send({
            userList: users,
            totalUser: users.length
        });
    });
}

exports.getUserById = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send({
            user: user
        });
    })
}

exports.updateUser = function (req, res, next) {
    
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true }, function (err, user) {
        if (err) {
            return next(err);
        }
        console.log(`user: ${user}`)
        res.send({
            update: true,
            user: user
        });
    })
}

exports.deleteUser = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send("User Deleted Successfulyy");
    })
}