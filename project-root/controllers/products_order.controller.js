const getAllProductsOrder = (req, res) => res.send('Lista de productos en órdenes');
const getProductOrderById = (req, res) => res.send(`Producto ${req.params.product_id} en orden ${req.params.order_id}`);
const createProductOrder = (req, res) => res.send('Producto agregado a orden');
const updateProductOrder = (req, res) => res.send(`Producto en orden actualizado`);
const deleteProductOrder = (req, res) => res.send(`Producto eliminado de orden`);

module.exports = { getAllProductsOrder, getProductOrderById, createProductOrder, updateProductOrder, deleteProductOrder };
