const db = require('../db');

exports.getAllPayments = (req, res) => {
  db.query('SELECT * FROM PAYMENTS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createPayment = (req, res) => {
  const { payment_id, order_id, holder_name, holder_number, cvv, card_type, price } = req.body;
  const sql = `
    INSERT INTO PAYMENTS (payment_id, order_id, holder_name, holder_number, cvv, card_type, price)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [payment_id, order_id, holder_name, holder_number, cvv, card_type, price], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Payment created successfully' });
  });
};
