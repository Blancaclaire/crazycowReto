const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Pago realizado'));
router.get('/', (req, res) => res.send('Lista de pagos'));
router.get('/:payment_id', (req, res) => res.send(`Pago con ID: ${req.params.payment_id}`));
router.put('/:payment_id', (req, res) => res.send(`Pago actualizado con ID: ${req.params.payment_id}`));
router.delete('/:payment_id', (req, res) => res.send(`Pago eliminado con ID: ${req.params.payment_id}`));

module.exports = router;
