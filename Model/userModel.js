'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    userName: {
        type: String,

        // required: 'Please enter User name '
    },
    mobileNo: {
        type: String

        //  required: 'Please enter Mobile Number '
    },
    emailAddress: {
        type: String,
        unique : true
        //  required: 'Please enter Email Address '
    },

    password :{
        type : String
    },

    isDeleted : {
        type : String
    },

    StartTrip: {
        type: String
    },
    EndTrip: {
        type: String
    },
    StartLoc: {
        type: String
    },
    EndLoc :{
        type : String
    },
    SpeedDes01 :{
        type : String
    },
    SpeedDes02 :{
        type : String
    },
    SpeedDes03 :{
        type : String
    },
    SpeedDes04 :{
        type : String
    },
    SpeedDes05 :{
        type : String
    },
    OverAcel :{
        type : String
    },
    HarshBrake :{
        type : String
    },
    SmoothBrake :{
        type : String
    },
    SmoothDrive :{
        type : String
    },
    RapidAcel :{
        type : String
    },
    NaturalDecel :{
        type : String
    },
    IdleTime :{
        type : String
    },
    AvgSpeed :{
        type : String
    },
    AvgRPM :{
        type : String
    },
    MaxSpeed :{
        type : String
    },
    MaxRPM :{
        type : String
    },
    UsualSpeed :{
        type : String
    },
    UsualRPM :{
        type : String
    },
    MedianSpeed :{
        type : String
    },
    MedianRPM :{
        type : String
    }
});

module.exports = mongoose.model('User', UserSchema);


