const getAllCustomers = (req, res) => {
    res.send('Lista de clientes');
};

const getCustomerById = (req, res) => {
    res.send(`Cliente con ID: ${req.params.customer_id}`);
};

const createCustomer = (req, res) => {
    res.send('Cliente creado');
};

const updateCustomer = (req, res) => {
    res.send(`Cliente actualizado con ID: ${req.params.customer_id}`);
};

const deleteCustomer = (req, res) => {
    res.send(`Cliente eliminado con ID: ${req.params.customer_id}`);
};

module.exports = { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };
