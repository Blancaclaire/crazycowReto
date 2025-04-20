const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Puesto de trabajo creado'));
router.get('/', (req, res) => res.send('Lista de puestos de trabajo'));
router.get('/:job_id', (req, res) => res.send(`Puesto con ID: ${req.params.job_id}`));
router.put('/:job_id', (req, res) => res.send(`Puesto actualizado con ID: ${req.params.job_id}`));
router.delete('/:job_id', (req, res) => res.send(`Puesto eliminado con ID: ${req.params.job_id}`));

module.exports = router;
