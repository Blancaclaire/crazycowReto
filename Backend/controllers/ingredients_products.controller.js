const db = require('../db');

exports.getAllIngredientsProducts = (req, res) => {
  db.query('SELECT * FROM INGREDIENTS_PRODUCTS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createIngredientProduct = (req, res) => {
  const { product_id, ingredient_id } = req.body;
  const sql = `
    INSERT INTO INGREDIENTS_PRODUCTS (product_id, ingredient_id)
    VALUES (?, ?)
  `;
  db.query(sql, [product_id, ingredient_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Ingredient assigned to product successfully' });
  });
};
