const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Restaurante creado'));
router.get('/', (req, res) => res.send('Lista de restaurantes'));
router.get('/:restaurant_id', (req, res) => res.send(`Restaurante con ID: ${req.params.restaurant_id}`));
router.put('/:restaurant_id', (req, res) => res.send(`Restaurante actualizado con ID: ${req.params.restaurant_id}`));
router.delete('/:restaurant_id', (req, res) => res.send(`Restaurante eliminado con ID: ${req.params.restaurant_id}`));

module.exports = router;
