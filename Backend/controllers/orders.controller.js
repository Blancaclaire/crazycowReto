const db = require('../db');

exports.getAllOrders = (req, res) => {
  db.query('SELECT * FROM ORDERS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createOrder = (req, res) => {
  const { order_id, customer_id, restaurant_id, order_date, order_hour, order_status, total, location } = req.body;
  const sql = `
    INSERT INTO ORDERS (order_id, customer_id, restaurant_id, order_date, order_hour, order_status, total, location)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [order_id, customer_id, restaurant_id, order_date, order_hour, order_status, total, location], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Order created successfully' });
  });
};
