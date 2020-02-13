const express =  require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
    res.render('layouts/links/JuegoASC');
});



router.post('/MisDatos',(req,res)=>{
    // para el manejo de el limite de cadenas
    var texto = req.body.cadena;
    var lengthc = texto.length;
    if(lengthc<10){
        for (var i = lengthc; i <10; i++) {
            texto+=CharRandom();
         }
         console.log('mi cadena es ' + texto);
    }
    console.log(lengthc);
    // para el manejo de el limite de cadenas


    res.redirect('/Game');
});

function CharRandom(){
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
    return caracteres.charAt(Math.floor(Math.random()*caracteres.length));
}





module.exports = router;