const express = require("express");
const router = express.Router();

const Compra = require('../controllers/compra');

router.get('/', Compra.teste);
router.post('/compra/criar', Compra.criar);
router.get('/compra/listar', Compra.listar);
router.get('/compra/listar/:id', Compra.listar);
router.put('/compra/alterar', Compra.alterar);
router.delete('/compra/excluir/:id', Compra.excluir);

module.exports = router