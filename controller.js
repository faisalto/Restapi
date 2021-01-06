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

exports.tampilId = function(req, res){
    let id = req.params.id;    
    connetion.query('select * from client where id =?', [id],
    function(error, rows, field){
        if (error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });

};

// menambahkan data

exports.tambahOrang = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var job = req.body.job;

    connetion.query('insert into client (nim, nama, job) values (?,?,?)', 
    [nim, nama, job], 
    function(error, rows, field){
        if (error){
            console.log(error);
        }else{
            response.ok("berhasil nambah data", res)
        }
    });
};

exports.ubah = function(req, res ){
    var id = req.body.id; 
    var nim = req.body.nim;
    var nama = req.body.nama;
    var job = req.body.job;

    connetion.query('update client  set nim =?, nama =? , job=? where id =?',[nim,nama,job ,id],
    function(error, rows, fields){
        if (error){
            console.log(error);
        }else{
            response.ok("berhasil ubah data", res)
        }
    });
    
};

exports.hapus = function (req, res){
    var id = req.body.Id;


    connetion.query('delete from client WHERE Id=?',[id], 
    function(error, rows, fields){
        if (error){
            console.log(error);
        }else{
            response.ok("berhasil ubah data", res)
        }
    });
}