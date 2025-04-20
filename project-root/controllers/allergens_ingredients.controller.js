const getAllAllergensIngredients = (req, res) => res.send('Lista de alérgenos asignados a ingredientes');
const getAllergenIngredientById = (req, res) => res.send(`Alérgeno ${req.params.allergen_id} asociado con ingrediente ${req.params.ingredient_id}`);
const createAllergenIngredient = (req, res) => res.send('Alérgeno asignado a ingrediente');
const updateAllergenIngredient = (req, res) => res.send(`Relación alérgeno-ingrediente actualizada`);
const deleteAllergenIngredient = (req, res) => res.send(`Relación alérgeno-ingrediente eliminada`);

module.exports = { getAllAllergensIngredients, getAllergenIngredientById, createAllergenIngredient, updateAllergenIngredient, deleteAllergenIngredient };
