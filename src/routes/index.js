const express = require('express');
const router = express.Router();

//Definir una ruta
router.get('/', (req, res) => {
    res.sendFile('./h');
});

module.exports = router;
// Ruta para...