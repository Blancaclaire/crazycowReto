const db = require('../db');

exports.getAllProductsOrder = (req, res) => {
  db.query('SELECT * FROM PRODUCTS_ORDER', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createProductOrder = (req, res) => {
  const { order_id, product_id, quantity } = req.body;
  const sql = `
    INSERT INTO PRODUCTS_ORDER (order_id, product_id, quantity)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [order_id, product_id, quantity], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Product added to order successfully' });
  });
};
