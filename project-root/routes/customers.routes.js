const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Cliente creado'));
router.get('/', (req, res) => res.send('Lista de clientes'));
router.get('/:customer_id', (req, res) => res.send(`Cliente con ID: ${req.params.customer_id}`));
router.put('/:customer_id', (req, res) => res.send(`Cliente actualizado con ID: ${req.params.customer_id}`));
router.delete('/:customer_id', (req, res) => res.send(`Cliente eliminado con ID: ${req.params.customer_id}`));

module.exports = router;
