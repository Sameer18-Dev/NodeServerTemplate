var response = require('./index');
var mongoose = require('mongoose');
var objectId = mongoose.Types.ObjectId;
var models = require('../Model/index').allModels;
var userObj = models.UserModel;
var utils = require("../Helper/Utils");












/*
                StartTrip: req.body.StartTrip,
                EndTrip: req.body.EndTrip,
                StartLoc: req.body.StartLoc,
                EndLoc: req.body.EndLoc,
                SpeedDes01: req.body.SpeedDes01,
                SpeedDes02: req.body.SpeedDes02,
                SpeedDes03: req.body.SpeedDes03,
                SpeedDes04: req.body.SpeedDes04,
                SpeedDes05: req.body.SpeedDes05,
                OverAcel: req.body.OverAcel,
                HarshBrake: req.body.HarshBrake,
                SmoothBrake: req.body.SmoothBrake,
                SmoothDrive: req.body.SmoothDrive,
                RapidAcel: req.body.RapidAcel,
                NaturalDecel: req.body.NaturalDecel,
                IdleTime: req.body.IdleTime,
                AvgSpeed: req.body.AvgSpeed,
                AvgRPM: req.body.AvgRPM,
                MaxSpeed: req.body.MaxSpeed,
                MaxRPM: req.body.MaxRPM,
                UsualSpeed: req.body.UsualSpeed,
                UsualRPM: req.body.UsualRPM,
                MedianSpeed: req.body.MedianSpeed,
                MedianRPM: req.body.MedianRPM*/



exports.addUser = function (req, res) {

//utils.generatePasswordHash

    var user = new userObj({
        userName: req.body.userName,
        mobileNo: req.body.mobileNo,
        emailAddress: req.body.emailAddress,
        password: (req.body.password),
        isDeleted: req.body.isDeleted,
                StartTrip: req.body.StartTrip,
                EndTrip: req.body.EndTrip,
                StartLoc: req.body.StartLoc,
                EndLoc: req.body.EndLoc,
                SpeedDes01: req.body.SpeedDes01,
                SpeedDes02: req.body.SpeedDes02,
                SpeedDes03: req.body.SpeedDes03,
                SpeedDes04: req.body.SpeedDes04,
                SpeedDes05: req.body.SpeedDes05,
                OverAcel: req.body.OverAcel,
                HarshBrake: req.body.HarshBrake,
                SmoothBrake: req.body.SmoothBrake,
                SmoothDrive: req.body.SmoothDrive,
                RapidAcel: req.body.RapidAcel,
                NaturalDecel: req.body.NaturalDecel,
                IdleTime: req.body.IdleTime,
                AvgSpeed: req.body.AvgSpeed,
                AvgRPM: req.body.AvgRPM,
                MaxSpeed: req.body.MaxSpeed,
                MaxRPM: req.body.MaxRPM,
                UsualSpeed: req.body.UsualSpeed,
                UsualRPM: req.body.UsualRPM,
                MedianSpeed: req.body.MedianSpeed,
                MedianRPM: req.body.MedianRPM

    });

    console.log(req.body);


    user.save(function (err, suc) {
        if (err) {

            if (11000 === err.code || 11001 === err.code) {
                response.send(400, {"data": "", "message": "User Creation Failed. User already exist."}, res);
            } else {
                response.send(400, {"data": "", "message": "User Creation Failed " + err}, res);
            }

        } else {
            response.send(200, {"data": suc, "message": "User Created Succesfully"}, res);
        }

    });
}








exports.getUsers = function (req, res) {
    // body...
    userObj.find({}, function(error, users){
        if(error){
            console.log(error);
        }
        else{
            res.send(users);
        }
    })
};










exports.deleteUser = function (req, res) {


    var validId = objectId.isValid(req.body.id);

    if (validId) {

        userObj.deleteOne({_id: objectId(req.body.id)}, function (err, suc) {


            if (suc.deletedCount > 0) {
                response.send(200, {"data": "", "message": "User deleted succesfully"}, res);
            } else {
                response.send(400, {"data": "", "message": "User ID does not exist"}, res);
            }


        })
    } else {
        response.send(400, {"data": "", "message": "User ID is Invalid"}, res);
    }
};

exports.updateUser = function (req, res) {


};
