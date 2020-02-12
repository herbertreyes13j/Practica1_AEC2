const express =  require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
 
    res.render('layouts/links/AscToMorse');
});


router.post('/Datos', (req,res)=>{

    //const {title,url,description} = req.body.title;


    
    res.send('probando');
});


module.exports = router;