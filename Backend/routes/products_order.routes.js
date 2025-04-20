const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.send('Producto en orden creado'));
router.get('/', (req, res) => res.send('Lista de productos en órdenes'));
router.get('/:order_id/:product_id', (req, res) => res.send(`Producto con ID: ${req.params.product_id} en orden con ID: ${req.params.order_id}`));
router.put('/:order_id/:product_id', (req, res) => res.send(`Producto en orden actualizado`));
router.delete('/:order_id/:product_id', (req, res) => res.send(`Producto eliminado de orden`));

module.exports = router;

const productsController = require('../controllers/products.controller');
const authMiddleware = require('../middleware/auth'); // Protección de rutas

// Mostrar productos en el frontend
router.get('/', productsController.getAllProducts);

// Permitir que un trabajador elimine un producto (requiere autenticación)
router.delete('/:product_id', authMiddleware, productsController.deleteProduct);

module.exports = router;
