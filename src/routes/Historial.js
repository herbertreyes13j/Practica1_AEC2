const express =  require('express');
const router =  express.Router();
const index = require('../index');

router.get('/',(req,res)=>{
    const prueba = index.stack2.toString();
    console.log(index.stack2);
    res.render('layouts/links/Historial',{lista:index.stack2});
});

module.exports = router;
