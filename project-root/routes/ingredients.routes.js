const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Ingrediente creado'));
router.get('/', (req, res) => res.send('Lista de ingredientes'));
router.get('/:ingredient_id', (req, res) => res.send(`Ingrediente con ID: ${req.params.ingredient_id}`));
router.put('/:ingredient_id', (req, res) => res.send(`Ingrediente actualizado con ID: ${req.params.ingredient_id}`));
router.delete('/:ingredient_id', (req, res) => res.send(`Ingrediente eliminado con ID: ${req.params.ingredient_id}`));

module.exports = router;
