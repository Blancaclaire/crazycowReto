const db = require('../db');

exports.getAllIngredients = (req, res) => {
  db.query('SELECT * FROM INGREDIENTS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createIngredient = (req, res) => {
  const { ingredient_id, ingredient_name } = req.body;
  const sql = `
    INSERT INTO INGREDIENTS (ingredient_id, ingredient_name)
    VALUES (?, ?)
  `;
  db.query(sql, [ingredient_id, ingredient_name], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Ingredient created successfully' });
  });
};
