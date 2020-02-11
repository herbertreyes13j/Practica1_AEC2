const express =  require('express');
const router =  express.Router();
const {stack} = require('./index');
router.get('/',(req,res)=>{
    stack.push('prueba');
    res.send(stack.pop());

});

module.exports = router;