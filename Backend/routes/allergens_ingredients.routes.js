const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Alérgeno asignado a ingrediente'));
router.get('/', (req, res) => res.send('Lista de alérgenos en ingredientes'));
router.get('/:allergen_id/:ingredient_id', (req, res) => res.send(`Alérgeno con ID: ${req.params.allergen_id} en ingrediente con ID: ${req.params.ingredient_id}`));
router.put('/:allergen_id/:ingredient_id', (req, res) => res.send(`Alérgeno en ingrediente actualizado`));
router.delete('/:allergen_id/:ingredient_id', (req, res) => res.send(`Alérgeno eliminado de ingrediente`));

module.exports = router;
