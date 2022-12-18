const mongoose = require('mongoose');

const usuariosModel = new mongoose.Schema({
    nome:String,
    senha:String,
    email:String,
    inscricao:{type:Date, default: Date.now},
    edicao:{type:Date, default:Date.now}
});

module.exports = usuariosModel;