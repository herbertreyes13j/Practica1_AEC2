const express =  require('express');
const router =  express.Router();
const index = require('../index');
const Swal = require('sweetalert2');


router.get('/',(req,res)=>{

    res.render('layouts/links/AscToMorse');
});



router.post('/IngresarPalabra',(req,res)=>{
    index.stack.push(req.body.palabra);
    var size =index.stack.length;
    
    console.log('Palabra agregada a pila No->');
    console.log(size);
    

    res.redirect('/AsciiMorse');
});

module.exports = router;