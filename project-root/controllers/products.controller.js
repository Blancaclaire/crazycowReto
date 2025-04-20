const getAllProducts = (req, res) => res.send('Lista de productos');
const getProductById = (req, res) => res.send(`Producto con ID: ${req.params.product_id}`);
const createProduct = (req, res) => res.send('Producto creado');
const updateProduct = (req, res) => res.send(`Producto actualizado con ID: ${req.params.product_id}`);
const deleteProduct = (req, res) => res.send(`Producto eliminado con ID: ${req.params.product_id}`);

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
