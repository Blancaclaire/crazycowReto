const getAllApplicants = (req, res) => res.send('Lista de aplicantes');
const getApplicantById = (req, res) => res.send(`Aplicante con ID: ${req.params.applicant_id}`);
const createApplicant = (req, res) => res.send('Aplicante registrado');
const updateApplicant = (req, res) => res.send(`Aplicante actualizado con ID: ${req.params.applicant_id}`);
const deleteApplicant = (req, res) => res.send(`Aplicante eliminado con ID: ${req.params.applicant_id}`);

module.exports = { getAllApplicants, getApplicantById, createApplicant, updateApplicant, deleteApplicant };
