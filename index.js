const express = require('Express');
const app = express();
const bodyParser = require('body-parser');
const init = require('./helpers')

app.use(express.static("public"))
    
init(app);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



app.get('/', function (req, res) {
    res.render('login',{layouts:"Login",obj:{login:false}});
});
app.get('/cadastro', function (req, res) {
    res.render('cadastro',{layouts:"Cadastro de Usuário",obj:{login:false}});
});
app.get('/home', function (req, res) {
    res.render('home',{layouts:"Inicial",helpers:{nome:"Higor",email:"higor.rabelo@gmail.com"}});
});
app.get('/agenda', function (req, res) {
    res.render('agenda',{layouts:"Agenda"});
});
app.get('/contato', function (req, res) {
    res.render('contato',{layouts:"Contato"});
});


app.listen(8080,()=>{console.log("Servidor Ativo")})
