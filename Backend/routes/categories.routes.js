const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Categoría creada'));
router.get('/', (req, res) => res.send('Lista de categorías'));
router.get('/:category_id', (req, res) => res.send(`Categoría con ID: ${req.params.category_id}`));
router.put('/:category_id', (req, res) => res.send(`Categoría actualizada con ID: ${req.params.category_id}`));
router.delete('/:category_id', (req, res) => res.send(`Categoría eliminada con ID: ${req.params.category_id}`));

module.exports = router;
