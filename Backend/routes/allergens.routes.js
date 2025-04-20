const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Alérgeno creado'));
router.get('/', (req, res) => res.send('Lista de alérgenos'));
router.get('/:allergen_id', (req, res) => res.send(`Alérgeno con ID: ${req.params.allergen_id}`));
router.put('/:allergen_id', (req, res) => res.send(`Alérgeno actualizado con ID: ${req.params.allergen_id}`));
router.delete('/:allergen_id', (req, res) => res.send(`Alérgeno eliminado con ID: ${req.params.allergen_id}`));

module.exports = router;
