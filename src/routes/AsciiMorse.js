const express =  require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
 
    res.render('layouts/links/AscToMorse');
});


router.post('/Datos', (req,res)=>{
        
        console.log(req.body.title);
        console.log(req.body);

    //const {title,url,description} = req.body.title;


    
    res.send(req.body);
});


module.exports = router;