const express =  require('express');
const router =  express.Router();
const index = require('../index');



router.get('/',function(req,res){

    console.log(index.stack);
    console.log(index.stack2);
    if(index.stack.length>0){
        
        var resp = index.stack.shift();
        
        if(resp=='vacia;morse'){
            res.send('vacia;morse');
            
        }else{
            index.stack2.push(resp);
            res.send(resp); 
        }
       

    }else{
        res.send('vacia');
    }
 

});

module.exports = router;