const express = require('express'); // inicializa la apliacion 
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


// Inicializacion 
const app = express();

// constantes para levantarlo local
const hostname='10.56.252.60';


const stack=[];

const stack2=[];  

//Settigns
app.set('port',process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
app.use(express.urlencoded())
//WiddleWares
app.use(morgan('dev')); // muestra mensajes y procesos por consola 


// variables globales

app.use((req,res,next)=>{

  next();
});

//Routes
app.use(require('./routes/index'));
app.use('/Asciimorse',require('./routes/AsciiMorse'));
app.use('/Morseascii',require('./routes/MorseAscii'));
app.use('/Game',require('./routes/Game'));
app.use('/Historial',require('./routes/Historial'));
app.use('/metodos',require('./routes/metodos'));
app.use(express.json());

app.listen(app.get('port'),'0.0.0.0',()=>{
    console.log('Server on port',app.get('port'));
})





exports.stack=stack;
exports.stack2=stack2;

