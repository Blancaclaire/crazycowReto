const getAllJobs = (req, res) => {
    res.send('Lista de puestos de trabajo');
};

const getJobById = (req, res) => {
    res.send(`Puesto con ID: ${req.params.job_id}`);
};

const createJob = (req, res) => {
    res.send('Puesto de trabajo creado');
};

const updateJob = (req, res) => {
    res.send(`Puesto actualizado con ID: ${req.params.job_id}`);
};

const deleteJob = (req, res) => {
    res.send(`Puesto eliminado con ID: ${req.params.job_id}`);
};

module.exports = { getAllJobs, getJobById, createJob, updateJob, deleteJob };
