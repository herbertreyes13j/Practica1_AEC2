const express =  require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
    res.render('layouts/links/MorseToAscii');
});

module.exports = router;
