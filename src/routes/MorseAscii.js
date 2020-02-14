const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.params);
    res.render('layouts/links/MorseToAscii');
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    var resp = req.params.id.split(",");
    var traducido = "";
    console.log(resp);
    for (i = 0; i < resp.length; i++) {
        console.log(resp[i]);
        switch (resp[i]) {
            case "._":
                traducido += "A";
                break;
            case "_...":
                traducido += "B";
                break;
            case "_._.":
                traducido += "C";
                break;
            case "_..":
                traducido += "D";
                break;
            case ".":
                traducido += "E";
                break;
            case ".._.":
                traducido += "F";
                break;
            case "__.":
                traducido += "G";
                break;
            case "....":
                traducido += "H";
                break;
            case "..":
                traducido += "I";
                break;
            case ".___":
                traducido += "J";
                break;
            case "_._":
                traducido += "K";
                break;
            case "._..":
                traducido += "L";
                break;
            case "__":
                traducido += "M";
                break;
            case "_.":
                traducido += "N";
                break;
            case "___":
                traducido += "O";
                break;
            case ".__.":
                traducido += "P";
                break;
            case "__._":
                traducido += "Q";
                break;
            case "._.":
                traducido += "R";
                break;
            case "...":
                traducido += "S";
                break;
            case "_":
                traducido += "T";
                break;
            case ".._":
                traducido += "U";
                break;
            case "..._":
                traducido += "V";
                break;
            case ".__":
                traducido += "W";
                break;
            case "_.._":
                traducido += "X";
                break;
            case "_.__":
                traducido += "Y";
                break;
            case "__..":
                traducido += "Z";
                break;
            case ".____":
                traducido += "1";
                break;
            case "..___":
                traducido += "2";
                break;
            case "...__":
                traducido += "3";
                break;
            case "...._":
                traducido += "4";
                break;
            case ".....":
                traducido += "5";
                break;
            case "_....":
                traducido += "6";
                break;
            case "__...":
                traducido += "7";
                break;
            case "___..":
                traducido += "8";
                break;
            case "____.":
                traducido += "9";
                break;
            case "_____":
                traducido += "0";
                break;
            case " ":
                traducido += " ";
                break;


        }
    }
    console.log(traducido);
    res.render('layouts/links/MorseToAscii', { traducido });
});


router.post('/MisDatos', (req, res) => {
    console.log('javier probando');
    res.redirect('/MorseAscii');
});



module.exports = router;
