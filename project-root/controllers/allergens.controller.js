const getAllAllergens = (req, res) => res.send('Lista de alérgenos');
const getAllergenById = (req, res) => res.send(`Alérgeno con ID: ${req.params.allergen_id}`);
const createAllergen = (req, res) => res.send('Alérgeno creado');
const updateAllergen = (req, res) => res.send(`Alérgeno actualizado con ID: ${req.params.allergen_id}`);
const deleteAllergen = (req, res) => res.send(`Alérgeno eliminado con ID: ${req.params.allergen_id}`);

module.exports = { getAllAllergens, getAllergenById, createAllergen, updateAllergen, deleteAllergen };
