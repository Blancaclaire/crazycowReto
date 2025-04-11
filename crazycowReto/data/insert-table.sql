USE example_db;

-- Insertar clientes
INSERT INTO CUSTOMERS (customer_id, name, surname, email, phone_number, user_name, password, address) VALUES
('CUST001', 'Juan', 'Pérez', 'juan.perez@example.com', '123456789', 'juanp', 'password123', 'Calle Falsa 123'),
('CUST002', 'Ana', 'Gómez', 'ana.gomez@example.com', '987654321', 'anag', 'pass456', 'Avenida Siempre Viva 742');

-- Insertar restaurantes
INSERT INTO RESTAURANTS (restaurant_id, manager_id, address, city, phone_number, capacity, opening_hours, closing_hours) VALUES
('REST001', 'EMP001', 'Gran Vía 1', 'Madrid', '912345678', 50, '10:00:00', '22:00:00'),
('REST002', 'EMP002', 'Paseo de Gracia 10', 'Barcelona', '932345678', 80, '09:00:00', '23:00:00');

-- Insertar pedidos
INSERT INTO ORDERS (order_id, customer_id, restaurant_id, order_date, order_hour, order_status, total, location) VALUES
('ORD001', 'CUST001', 'REST001', '2025-04-04', '19:30:00', 'Completed', 25.50, 'Calle Falsa 123'),
('ORD002', 'CUST002', 'REST002', '2025-04-04', '20:15:00', 'Pending', 18.75, 'Avenida Siempre Viva 742');

-- Insertar asignación de pedidos a clientes
INSERT INTO ORDER_CUSTOMERS (order_id, customer_id, delivery_address) VALUES
('ORD001', 'CUST001', 'Calle Falsa 123'),
('ORD002', 'CUST002', 'Avenida Siempre Viva 742');

-- Insertar pagos
INSERT INTO PAYMENTS (payment_id, order_id, holder_name, holder_number, cvv, card_type, price) VALUES
('PAY001', 'ORD001', 'Juan Pérez', '1111222233334444', '123', 'Visa', 25.50),
('PAY002', 'ORD002', 'Ana Gómez', '5555666677778888', '456', 'Mastercard', 18.75);

-- Insertar categorías de productos
INSERT INTO CATEGORIES (category_id, category_name) VALUES
('CAT001', 'Pizzas'),
('CAT002', 'Bebidas');

-- Insertar productos
INSERT INTO PRODUCTS (product_id, category_id, product_name, recipe, price) VALUES
('PROD001', 'CAT001', 'Pizza Margarita', 'Tomate, Mozzarella, Albahaca', 12.00),
('PROD002', 'CAT002', 'Coca-Cola', 'Bebida carbonatada', 2.50);

-- Insertar ingredientes
INSERT INTO INGREDIENTS (ingredient_id, ingredient_name) VALUES
('ING001', 'Tomate'),
('ING002', 'Mozzarella'),
('ING003', 'Albahaca');

-- Insertar alérgenos
INSERT INTO ALLERGENS (allergen_id, allergen_name) VALUES
('ALL001', 'Gluten'),
('ALL002', 'Lactosa');

-- Insertar trabajos
INSERT INTO JOBS (job_id, department_name, job_title) VALUES
('JOB001', 'Gerencia', 'Gerente'),
('JOB002', 'Cocina', 'Chef');

-- Insertar empleados
INSERT INTO EMPLOYEES (employee_id, manager_id, job_id, restaurant_id, salary, name, surname, email, phone_number, user_name, password, address, start_date) VALUES
('EMP001', NULL, 'JOB001', 'REST001', 2000.00, 'Carlos', 'Fernández', 'carlos@example.com', '912345678', 'carlitos', 'mypassword', 'Gran Vía 1', '2025-01-10'),
('EMP002', 'EMP001', 'JOB002', 'REST002', 1800.00, 'Elena', 'Ruiz', 'elena@example.com', '932345678', 'elena_r', 'securepass', 'Paseo de Gracia 10', '2025-02-20');

-- Insertar solicitantes
INSERT INTO APPLICANTS (applicant_id, job_id, name, surname, email, phone_number, address, resume, aplication_date) VALUES
('APP001', 'JOB002', 'Martín', 'López', 'martin.lopez@example.com', '652345678', 'Calle Nueva 45', 'Experiencia en cocina', '2025-03-15');

-- Insertar productos en pedidos
INSERT INTO PRODUCTS_ORDER (order_id, product_id, quantity) VALUES
('ORD001', 'PROD001', 1),
('ORD002', 'PROD002', 2);

-- Asignar ingredientes a productos
INSERT INTO INGREDIENTS_PRODUCTS (product_id, ingredient_id) VALUES
('PROD001', 'ING001'),
('PROD001', 'ING002'),
('PROD001', 'ING003');

-- Asignar alérgenos a ingredientes
INSERT INTO ALLERGEN_INGREDIENTS (allergen_id, ingredient_id) VALUES
('ALL002', 'ING002');

-- Insertar stock en restaurantes
INSERT INTO STOCK_RESTAURANTS (restaurant_id, ingredient_id, quantity_available) VALUES
('REST001', 'ING001', 30),
('REST001', 'ING002', 25),
('REST002', 'ING003', 20);
