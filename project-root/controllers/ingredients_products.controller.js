const getAllIngredientsProducts = (req, res) => res.send('Lista de ingredientes en productos');
const getIngredientProductById = (req, res) => res.send(`Ingrediente ${req.params.ingredient_id} en producto ${req.params.product_id}`);
const createIngredientProduct = (req, res) => res.send('Ingrediente asignado a producto');
const updateIngredientProduct = (req, res) => res.send(`Ingrediente en producto actualizado`);
const deleteIngredientProduct = (req, res) => res.send(`Ingrediente eliminado de producto`);

module.exports = { getAllIngredientsProducts, getIngredientProductById, createIngredientProduct, updateIngredientProduct, deleteIngredientProduct };
