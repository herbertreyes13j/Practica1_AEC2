const express =  require('express');
const router =  express.Router();
const {stack} = require('./index');

router.get('/',(req,res)=>{
 
    res.render('layouts/links/AscToMorse');
});


router.post('/Datos', (req,res)=>{
        
        console.log(req.body.title);
        console.log(req.body);

    //const {title,url,description} = req.body.title;

        console.log('Golon gay');
    
    res.send(req.body);
});

router.post('/IngresarPalabra',(req,res)=>{
    stack.push(req.body.palabra);
    var size =stack.length;
    console.log('hizo post');
    console.log(size);
    res.render('layouts/links/AscToMorse');
});


module.exports = router;