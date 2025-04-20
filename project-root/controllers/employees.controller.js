const getAllEmployees = (req, res) => {
    res.send('Lista de empleados');
};

const getEmployeeById = (req, res) => {
    res.send(`Empleado con ID: ${req.params.employee_id}`);
};

const createEmployee = (req, res) => {
    res.send('Empleado creado');
};

const updateEmployee = (req, res) => {
    res.send(`Empleado actualizado con ID: ${req.params.employee_id}`);
};

const deleteEmployee = (req, res) => {
    res.send(`Empleado eliminado con ID: ${req.params.employee_id}`);
};

module.exports = { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
