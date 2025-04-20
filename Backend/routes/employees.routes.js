const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Empleado creado'));
router.get('/', (req, res) => res.send('Lista de empleados'));
router.get('/:employee_id', (req, res) => res.send(`Empleado con ID: ${req.params.employee_id}`));
router.put('/:employee_id', (req, res) => res.send(`Empleado actualizado con ID: ${req.params.employee_id}`));
router.delete('/:employee_id', (req, res) => res.send(`Empleado eliminado con ID: ${req.params.employee_id}`));

module.exports = router;
