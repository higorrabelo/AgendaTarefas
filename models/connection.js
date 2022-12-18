const mongoose = require('mongoose');
const usuariosModel = require('./usuarios');
const crypto = require('crypto-js');

mongoose.connect("mongodb://localhost:27017/agenda",{useNewUrlParser:true, useUnifiedTopology:true});


const Usuarios = mongoose.model("Usuarios",usuariosModel);


//Deletar Registro
Usuarios.findByIdAndDelete("639f6d0ab0538909647c7959").then(()=>{console.log("Registro Apagado")})
.catch((erro)=>{console.log("Erro ao Apagar O Registro")});

/*
Cadastro de Usuários

const usuario = new Usuarios({
    nome:"Maria de Nazaré Moura Rabêlo",
    senha:crypto.MD5("Nazare").toString(),
    email:"maria@gmail.com"
});

usuario.save()
.then(()=>{console.log("Usuario Salvo com sucesso")})
.catch((err)=>{console.log("Erro no cadastro de usuário")});

Encontrar usuários
Usuarios.find({}).then(function(usuarios){
    console.log(usuarios)})
.catch(function(erro){console.log("Erro em recuperar usuários")})

*/

