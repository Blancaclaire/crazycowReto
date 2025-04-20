const db = require('../db'); // <-- Tu conexión a MySQL

exports.getAllCustomers = (req, res) => {
  db.query('SELECT * FROM CUSTOMERS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getCustomerById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM CUSTOMERS WHERE customer_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Customer not found' });
    res.json(results[0]);
  });
};

exports.createCustomer = (req, res) => {
  const {
    customer_id, name, surname, email,
    phone_number, user_name, password, address
  } = req.body;

  const sql = `
    INSERT INTO CUSTOMERS (customer_id, name, surname, email, phone_number, user_name, password, address)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [customer_id, name, surname, email, phone_number, user_name, password, address], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Customer created successfully' });
  });
};

exports.updateCustomer = (req, res) => {
  const { id } = req.params;
  const {
    name, surname, email, phone_number,
    user_name, password, address
  } = req.body;

  const sql = `
    UPDATE CUSTOMERS
    SET name = ?, surname = ?, email = ?, phone_number = ?, user_name = ?, password = ?, address = ?
    WHERE customer_id = ?
  `;

  db.query(sql, [name, surname, email, phone_number, user_name, password, address, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Customer not found' });
    res.json({ message: 'Customer updated successfully' });
  });
};

exports.deleteCustomer = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM CUSTOMERS WHERE customer_id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Customer not found' });
    res.json({ message: 'Customer deleted successfully' });
  });
};
