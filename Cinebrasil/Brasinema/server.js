// Requerindo o que vai ser usado
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
  

// Requerindo módulos de outros .js
const sequelize = require('./models/db');
const indexRouter = require('./routes/connectRoutes');

// App Express
const app = express();

// Arquivos estáticos
app.use(express.static(__dirname));
app.use(express.static('public'));

// listen
app.listen(8081, function(){console.log("Servidor Rodando!");});

// Registrando engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// routes
app.use('/', indexRouter.router);

// Página 404
app.use((req,res) => {
    res.status(404).render('404', { title: '404'});
})

//exportando modulos
module.exports ={
    app,
}


