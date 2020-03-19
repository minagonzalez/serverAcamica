const express = require('express');


const router = express.Router();

router.get('/bandas', buscarBanda)

router.get('/bandas/:id', buscarId)

module.exports = router;