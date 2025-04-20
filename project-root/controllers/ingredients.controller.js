const getAllIngredients = (req, res) => res.send('Lista de ingredientes');
const getIngredientById = (req, res) => res.send(`Ingrediente con ID: ${req.params.ingredient_id}`);
const createIngredient = (req, res) => res.send('Ingrediente creado');
const updateIngredient = (req, res) => res.send(`Ingrediente actualizado con ID: ${req.params.ingredient_id}`);
const deleteIngredient = (req, res) => res.send(`Ingrediente eliminado con ID: ${req.params.ingredient_id}`);

module.exports = { getAllIngredients, getIngredientById, createIngredient, updateIngredient, deleteIngredient };
