const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Orden creada'));
router.get('/', (req, res) => res.send('Lista de órdenes'));
router.get('/:order_id', (req, res) => res.send(`Orden con ID: ${req.params.order_id}`));
router.put('/:order_id', (req, res) => res.send(`Orden actualizada con ID: ${req.params.order_id}`));
router.delete('/:order_id', (req, res) => res.send(`Orden eliminada con ID: ${req.params.order_id}`));

module.exports = router;
