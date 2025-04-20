const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Ingrediente asignado a producto'));
router.get('/', (req, res) => res.send('Lista de ingredientes en productos'));
router.get('/:product_id/:ingredient_id', (req, res) => res.send(`Ingrediente con ID: ${req.params.ingredient_id} en producto con ID: ${req.params.product_id}`));
router.put('/:product_id/:ingredient_id', (req, res) => res.send(`Ingrediente en producto actualizado`));
router.delete('/:product_id/:ingredient_id', (req, res) => res.send(`Ingrediente eliminado de producto`));

module.exports = router;
