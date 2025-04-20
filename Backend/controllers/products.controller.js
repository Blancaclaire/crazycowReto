const db = require('../db');

exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM PRODUCTS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createProduct = (req, res) => {
  const { product_id, category_id, product_name, recipe, price } = req.body;
  const sql = `
    INSERT INTO PRODUCTS (product_id, category_id, product_name, recipe, price)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [product_id, category_id, product_name, recipe, price], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Product created successfully' });
  });
};
