//membuat navigasi 


'use strict';
module.exports = function(app){

    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);

    app.route('/tampil').get(jsonku.tampilsemua);

    app.route('/tampil/:id').get(jsonku.tampilId);

    app.route('/tambah').post(jsonku.tambahOrang);

    app.route('/ubahData').put(jsonku.ubah);

    app.route('/hapusData').delete(jsonku.hapus);

}


