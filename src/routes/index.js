const express =  require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});


// se puden hacer cuantos get y posts se necesiten solo se necesita identificarlos

router.post('/asctomorse',(req,res)=>{
    res.redirect('AsciiMorse');
});


router.post('/morsetoasc',(req,res)=>{
    res.redirect('MorseAscii');
});

router.post('/Juegos',(req,res)=>{
    res.redirect('Game');
});

router.post('/historial',(req,res)=>{
    res.redirect('Historial');
});


module.exports = router;