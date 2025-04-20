const getAllOrders = (req, res) => {
    res.send('Lista de órdenes');
};

const getOrderById = (req, res) => {
    res.send(`Orden con ID: ${req.params.order_id}`);
};

const createOrder = (req, res) => {
    res.send('Orden creada');
};

const updateOrder = (req, res) => {
    res.send(`Orden actualizada con ID: ${req.params.order_id}`);
};

const deleteOrder = (req, res) => {
    res.send(`Orden eliminada con ID: ${req.params.order_id}`);
};

module.exports = { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };
