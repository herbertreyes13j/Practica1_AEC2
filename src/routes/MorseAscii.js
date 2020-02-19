const express = require('express');
const router = express.Router();
const index=require('../index');

router.get('/', (req, res) => {
    index.stack.push('vacia;morse');
    console.log(req.params);
    res.render('layouts/links/MorseToAscii',{traducido:index.traducido});
});

router.post('/', (req, res) => {
    console.log('hizo POST');
    console.log(req.body.value);
    //console.log(req.headers);

    //console.log(req.body.Palabra);
    /*
    index.traducido=req.params.id;
    */
    res.send('Enviado');
});


router.post('/MisDatos', (req, res) => {
    console.log('javier probando');
    res.redirect('/MorseAscii');
});



module.exports = router;
