const db = require('../db');

exports.getAllAllergensIngredients = (req, res) => {
  db.query('SELECT * FROM ALLERGEN_INGREDIENTS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getAllergenIngredientById = (req, res) => {
  const { allergen_id, ingredient_id } = req.params;
  db.query(
    'SELECT * FROM ALLERGEN_INGREDIENTS WHERE allergen_id = ? AND ingredient_id = ?',
    [allergen_id, ingredient_id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: 'Relation not found' });
      res.json(results[0]);
    }
  );
};

exports.createAllergenIngredient = (req, res) => {
  const { allergen_id, ingredient_id } = req.body;
  const sql = `
    INSERT INTO ALLERGEN_INGREDIENTS (allergen_id, ingredient_id)
    VALUES (?, ?)
  `;
  db.query(sql, [allergen_id, ingredient_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Relation created successfully' });
  });
};

exports.deleteAllergenIngredient = (req, res) => {
  const { allergen_id, ingredient_id } = req.params;
  db.query(
    'DELETE FROM ALLERGEN_INGREDIENTS WHERE allergen_id = ? AND ingredient_id = ?',
    [allergen_id, ingredient_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Relation not found' });
      res.json({ message: 'Relation deleted successfully' });
    }
  );
};
