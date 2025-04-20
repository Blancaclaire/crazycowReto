const db = require('../db');

exports.getAllEmployees = (req, res) => {
  db.query('SELECT * FROM EMPLOYEES', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getEmployeeById = (req, res) => {
  const { employee_id } = req.params;
  db.query('SELECT * FROM EMPLOYEES WHERE employee_id = ?', [employee_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Employee not found' });
    res.json(results[0]);
  });
};

exports.createEmployee = (req, res) => {
  const { employee_id, manager_id, job_id, restaurant_id, salary, name, surname, email, phone_number, user_name, password, address, start_date } = req.body;
  const sql = `
    INSERT INTO EMPLOYEES (employee_id, manager_id, job_id, restaurant_id, salary, name, surname, email, phone_number, user_name, password, address, start_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [employee_id, manager_id, job_id, restaurant_id, salary, name, surname, email, phone_number, user_name, password, address, start_date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Employee created successfully' });
  });
};
