const db = require('../db');

exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM CATEGORIES', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createCategory = (req, res) => {
  const { category_id, category_name } = req.body;
  const sql = `
    INSERT INTO CATEGORIES (category_id, category_name)
    VALUES (?, ?)
  `;
  db.query(sql, [category_id, category_name], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Category created successfully' });
  });
};
