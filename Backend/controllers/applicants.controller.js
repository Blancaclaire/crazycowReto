const db = require('../db');

exports.getAllApplicants = (req, res) => {
  db.query('SELECT * FROM APPLICANTS', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createApplicant = (req, res) => {
  const { applicant_id, job_id, name, surname, email, phone_number, address, resume, application_date } = req.body;
  const sql = `
    INSERT INTO APPLICANTS (applicant_id, job_id, name, surname, email, phone_number, address, resume, application_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [applicant_id, job_id, name, surname, email, phone_number, address, resume, application_date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Applicant created successfully' });
  });
};
