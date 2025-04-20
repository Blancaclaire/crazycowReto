const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Aplicante registrado'));
router.get('/', (req, res) => res.send('Lista de aplicantes'));
router.get('/:applicant_id', (req, res) => res.send(`Aplicante con ID: ${req.params.applicant_id}`));
router.put('/:applicant_id', (req, res) => res.send(`Aplicante actualizado con ID: ${req.params.applicant_id}`));
router.delete('/:applicant_id', (req, res) => res.send(`Aplicante eliminado con ID: ${req.params.applicant_id}`));

module.exports = router;
