const db = require('../db');

exports.getAllAllergens = (req, res) => {
  db.query('SELECT * FROM ALLERGENS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createAllergen = (req, res) => {
  const { allergen_id, allergen_name } = req.body;
  const sql = `
    INSERT INTO ALLERGENS (allergen_id, allergen_name)
    VALUES (?, ?)
  `;
  db.query(sql, [allergen_id, allergen_name], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Allergen created successfully' });
  });
};

exports.deleteAllergen = (req, res) => {
  const { allergen_id } = req.params;
  db.query('DELETE FROM ALLERGENS WHERE allergen_id = ?', [allergen_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Allergen not found' });
    res.json({ message: 'Allergen deleted successfully' });
  });
};
