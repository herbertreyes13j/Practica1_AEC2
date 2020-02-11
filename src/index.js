const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
// Inicializacion 
const app = express();

var stack=[];
var stack2=[];  

//Settins
app.set('port',8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
//WiddleWares
app.use(morgan('dev'));

//Routes
app.use(require('./routes/index'));
app.use('/metodos',require('./routes/metodos'));

app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
})

module.exports={stack,stack2};
