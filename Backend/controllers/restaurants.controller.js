const db = require('../db');

exports.getAllRestaurants = (req, res) => {
  db.query('SELECT * FROM RESTAURANTS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createRestaurant = (req, res) => {
  const { restaurant_id, manager_id, address, city, phone_number, capacity, opening_hours, closing_hours } = req.body;
  const sql = `
    INSERT INTO RESTAURANTS (restaurant_id, manager_id, address, city, phone_number, capacity, opening_hours, closing_hours)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [restaurant_id, manager_id, address, city, phone_number, capacity, opening_hours, closing_hours], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Restaurant created successfully' });
  });
};
