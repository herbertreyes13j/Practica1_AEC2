const express =  require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
    res.render('layouts/links/MorseToAscii');
});


router.post('/MisDatos',(req,res)=>{
    console.log('javier probando');
    res.redirect('/MorseAscii');
});



module.exports = router;
