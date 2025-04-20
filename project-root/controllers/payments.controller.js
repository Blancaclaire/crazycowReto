const getAllPayments = (req, res) => {
    res.send('Lista de pagos');
};

const getPaymentById = (req, res) => {
    res.send(`Pago con ID: ${req.params.payment_id}`);
};

const createPayment = (req, res) => {
    res.send('Pago registrado');
};

const updatePayment = (req, res) => {
    res.send(`Pago actualizado con ID: ${req.params.payment_id}`);
};

const deletePayment = (req, res) => {
    res.send(`Pago eliminado con ID: ${req.params.payment_id}`);
};

module.exports = { getAllPayments, getPaymentById, createPayment, updatePayment, deletePayment };
