const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Importar rutas
app.use('/customers', require('./routes/customers.routes'));
app.use('/restaurants', require('./routes/restaurants.routes'));
app.use('/orders', require('./routes/orders.routes'));
app.use('/payments', require('./routes/payments.routes'));
app.use('/categories', require('./routes/categories.routes'));
app.use('/products', require('./routes/products.routes'));
app.use('/ingredients', require('./routes/ingredients.routes'));
app.use('/allergens', require('./routes/allergens.routes'));
app.use('/jobs', require('./routes/jobs.routes'));
app.use('/employees', require('./routes/employees.routes'));
app.use('/applicants', require('./routes/applicants.routes'));
app.use('/products_order', require('./routes/products_order.routes'));
app.use('/ingredients_products', require('./routes/ingredients_products.routes'));
app.use('/allergens_ingredients', require('./routes/allergens_ingredients.routes'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
