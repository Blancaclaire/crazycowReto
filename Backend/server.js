const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Middleware personalizado para manejar errores de forma global (opcional)
app.use((err, req, res, next) => {
  console.error('Error global:', err);
  res.status(500).json({ success: false, message: 'Error interno del servidor' });
});

// Base de datos (puedes exportar el pool desde un archivo aparte si quieres)
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'example_db'
};

const pool = mysql.createPool(dbConfig);
app.set('db', pool); // lo adjuntamos para usarlo en los controladores si se necesita

// ---------- Importar rutas ----------
const customersRoutes = require('./routes/customers.routes');
const restaurantsRoutes = require('./routes/restaurants.routes');
const ordersRoutes = require('./routes/orders.routes');
const paymentsRoutes = require('./routes/payments.routes');
const categoriesRoutes = require('./routes/categories.routes');
const productsRoutes = require('./routes/products.routes');
const ingredientsRoutes = require('./routes/ingredients.routes');
const allergensRoutes = require('./routes/allergens.routes');
const jobsRoutes = require('./routes/jobs.routes');
const employeesRoutes = require('./routes/employees.routes');
const applicantsRoutes = require('./routes/applicants.routes');
const productsOrderRoutes = require('./routes/products_order.routes');
const ingredientsProductsRoutes = require('./routes/ingredients_products.routes');
const allergensIngredientsRoutes = require('./routes/allergens_ingredients.routes');

// ---------- Usar rutas ----------
app.use('/api/customers', customersRoutes);
app.use('/api/restaurants', restaurantsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/allergens', allergensRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/applicants', applicantsRoutes);
app.use('/api/products-order', productsOrderRoutes);
app.use('/api/ingredients-products', ingredientsProductsRoutes);
app.use('/api/allergens-ingredients', allergensIngredientsRoutes);

// ---------- Iniciar servidor ----------
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
