const getAllCategories = (req, res) => res.send('Lista de categorías');
const getCategoryById = (req, res) => res.send(`Categoría con ID: ${req.params.category_id}`);
const createCategory = (req, res) => res.send('Categoría creada');
const updateCategory = (req, res) => res.send(`Categoría actualizada con ID: ${req.params.category_id}`);
const deleteCategory = (req, res) => res.send(`Categoría eliminada con ID: ${req.params.category_id}`);

module.exports = { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
