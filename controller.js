'use strict';

var response = require('./res');
var connetion = require('./koneksi');


exports.index = function(req,res){
    response.ok("aplikasi rest api berjalan" , res)
};


exports.tampilsemua = function(req,res){
    connetion.query('select * from client', function(error, rows, field){
        if (error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};