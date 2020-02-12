const express =  require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
    res.render('layouts/links/Historial');
});

module.exports = router;
