const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Producto creado'));
router.get('/', (req, res) => res.send('Lista de productos'));
router.get('/:product_id', (req, res) => res.send(`Producto con ID: ${req.params.product_id}`));
router.put('/:product_id', (req, res) => res.send(`Producto actualizado con ID: ${req.params.product_id}`));
router.delete('/:product_id', (req, res) => res.send(`Producto eliminado con ID: ${req.params.product_id}`));

module.exports = router;
