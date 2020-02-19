const express =  require('express');
const router =  express.Router();
const index = require('../index');
const Swal = require('sweetalert2');


router.get('/',(req,res)=>{

    res.render('layouts/links/AscToMorse');
});



router.post('/IngresarPalabra',(req,res)=>{
    var cadena= req.body.palabra+';'+'ascii';
    index.stack.push(cadena);
    var size =index.stack.length;
    console.log('La palabra es '+cadena);
    console.log('Palabra agregada a pila No->' + size);
    res.redirect('/AsciiMorse');
});

module.exports = router;