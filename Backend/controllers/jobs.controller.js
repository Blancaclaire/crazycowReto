const db = require('../db');

exports.getAllJobs = (req, res) => {
  db.query('SELECT * FROM JOBS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createJob = (req, res) => {
  const { job_id, department_name, job_title } = req.body;
  const sql = `
    INSERT INTO JOBS (job_id, department_name, job_title)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [job_id, department_name, job_title], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Job created successfully' });
  });
};
