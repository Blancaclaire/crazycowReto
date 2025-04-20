const getAllRestaurants = (req, res) => {
    res.send('Lista de restaurantes');
};

const getRestaurantById = (req, res) => {
    res.send(`Restaurante con ID: ${req.params.restaurant_id}`);
};

const createRestaurant = (req, res) => {
    res.send('Restaurante creado');
};

const updateRestaurant = (req, res) => {
    res.send(`Restaurante actualizado con ID: ${req.params.restaurant_id}`);
};

const deleteRestaurant = (req, res) => {
    res.send(`Restaurante eliminado con ID: ${req.params.restaurant_id}`);
};

module.exports = { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant };
