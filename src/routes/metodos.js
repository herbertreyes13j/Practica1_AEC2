const express =  require('express');
const router =  express.Router();
const {stack,cola} = require('./index');




router.get('/',function(req,res){
    

    if(stack.length>5){
        console.log(stack.length);
        res.send(stack.pop());
        
    }else{
        res.send('vacia');

    }
    
// stack.psuh(vacia)
// res.send(stack.pop())    

});

module.exports = router;