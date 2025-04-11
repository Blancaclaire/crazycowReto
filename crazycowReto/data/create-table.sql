USE example_db;

CREATE TABLE IF NOT EXISTS CUSTOMERS (
    customer_id Varchar(100) PRIMARY KEY,
    name Varchar(255) NOT NULL,
    surname Varchar(255) NOT NULL,
    email Varchar(255) NOT NULL,
    phone_number Varchar(20) NOT NULL,
    user_name Varchar(255) NOT NULL,
    password Varchar(255) NOT NULL,
    address Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS RESTAURANTS (
    restaurant_id Varchar(100) PRIMARY KEY,
    manager_id Varchar(100) NOT NULL,
    address Varchar(255) NOT NULL,
    city Varchar(255) NOT NULL,
    phone_number Varchar(20) NOT NULL,
    capacity INT NOT NULL,
    opening_hours TIME NOT NULL,
    closing_hours TIME NOT NULL
);

CREATE TABLE IF NOT EXISTS ORDERS (
    order_id Varchar(100) PRIMARY KEY,
    customer_id Varchar(100) NOT NULL,
    restaurant_id Varchar(100) NOT NULL,
    order_date DATE NOT NULL,
    order_hour TIME NOT NULL,
    order_status Varchar(50) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    location Varchar(255) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id),
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(restaurant_id)
);

CREATE TABLE IF NOT EXISTS ORDER_CUSTOMERS (
    order_id Varchar(100) NOT NULL,
    customer_id Varchar(100) NOT NULL,
    delivery_address Varchar(255) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id),
    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id)
);

CREATE TABLE IF NOT EXISTS PAYMENTS (
    payment_id Varchar(100) PRIMARY KEY,
    order_id Varchar(100) NOT NULL,
    holder_name Varchar(255) NOT NULL,
    holder_number Varchar(20) NOT NULL,
    cvv Varchar(4) NOT NULL,
    card_type Varchar(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id)
);

CREATE TABLE IF NOT EXISTS CATEGORIES (
    category_id Varchar(100) PRIMARY KEY,
    category_name Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS PRODUCTS (
    product_id Varchar(100) PRIMARY KEY,
    category_id Varchar(100) NOT NULL,
    product_name Varchar(255) NOT NULL,
    recipe TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES CATEGORIES(category_id)
);

CREATE TABLE IF NOT EXISTS INGREDIENTS (
    ingredient_id Varchar(100) PRIMARY KEY,
    ingredient_name Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ALLERGENS (
    allergen_id Varchar(100) PRIMARY KEY,
    allergen_name Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS JOBS (
    job_id Varchar(100) PRIMARY KEY,
    department_name Varchar(255) NOT NULL,
    job_title Varchar(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS EMPLOYEES (
    employee_id Varchar(100) PRIMARY KEY,
    manager_id Varchar(100),
    job_id Varchar(100) NOT NULL,
    restaurant_id INT NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    name Varchar(255) NOT NULL,
    surname Varchar(255) NOT NULL,
    email Varchar(255) NOT NULL,
    phone_number Varchar(20) NOT NULL,
    user_name Varchar(255) NOT NULL,
    password Varchar(255) NOT NULL,
    address Varchar(255) NOT NULL,
    start_date DATE NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(restaurant_id),
    FOREIGN KEY (manager_id) REFERENCES EMPLOYEES(employee_id),
    FOREIGN KEY (job_id) REFERENCES JOBS(job_id)
);


CREATE TABLE IF NOT EXISTS APPLICANTS(
    applicant_id Varchar(100) PRIMARY KEY,
    job_id Varchar(100) NOT NULL,
    name Varchar(255) NOT NULL,
    surname Varchar(255) NOT NULL,
    email Varchar(255) NOT NULL,
    phone_number Varchar(20) NOT NULL,
    address Varchar(255) NOT NULL,
    resume TEXT NOT NULL,
    aplication_date DATE NOT NULL,
    FOREIGN KEY (job_id) REFERENCES JOBS(job_id)
);


CREATE TABLE IF NOT EXISTS PRODUCTS_ORDER(
    order_id Varchar(100) NOT NULL,
    product_id Varchar(100) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id),
    FOREIGN KEY (product_id) REFERENCES PRODUCTS(product_id)
); 

CREATE TABLE IF NOT EXISTS INGREDIENTS_PRODUCTS(
    product_id Varchar(100) NOT NULL,
    ingredient_id Varchar(100) NOT NULL,
    PRIMARY KEY (product_id, ingredient_id),
    FOREIGN KEY (product_id) REFERENCES PRODUCTS(product_id),
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS(ingredient_id)
);

CREATE TABLE IF NOT EXISTS ALLERGEN_INGREDIENTS(
    allergen_id Varchar(100) NOT NULL,
    ingredient_id Varchar(100) NOT NULL,
    PRIMARY KEY (allergen_id, ingredient_id),
    FOREIGN KEY (allergen_id) REFERENCES ALLERGENS(allergen_id),
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS(ingredient_id)
);


CREATE TABLE IF NOT EXISTS STOCK_RESTAURANTS(
    restaurant_id Varchar(100) NOT NULL,
    ingredient_id Varchar(100) NOT NULL,
    quantity_available INT NOT NULL,
    PRIMARY KEY (restaurant_id, ingredient_id),
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(restaurant_id),
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS(ingredient_id)
); 