USE example_db;

CREATE TABLE IF NOT EXISTS CUSTOMERS (
    customer_id INT PRIMARY KEY,
    name Varchar(255) NOT NULL,
    surname Varchar(255) NOT NULL,
    email Varchar(255) NOT NULL,
    phone_number Varchar(20) NOT NULL,
    user_name Varchar(255) NOT NULL,
    password Varchar(255) NOT NULL,
    address Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS RESTAURANTS (
    restaurant_id INT PRIMARY KEY,
    manager_id INT NOT NULL,
    address Varchar(255) NOT NULL,
    city Varchar(255) NOT NULL,
    phone_number Varchar(20) NOT NULL,
    capacity INT NOT NULL,
    opening_hours TIME NOT NULL,
    closing_hours TIME NOT NULL
);

CREATE TABLE IF NOT EXISTS ORDERS (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    order_date DATE NOT NULL,
    order_hour TIME NOT NULL,
    order_status Varchar(50) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    location Varchar(255) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id),
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(restaurant_id)
);

CREATE TABLE IF NOT EXISTS PAYMENTS (
    payment_id INT PRIMARY KEY,
    order_id INT NOT NULL,
    holder_name Varchar(255) NOT NULL,
    holder_number Varchar(20) NOT NULL,
    cvv Varchar(4) NOT NULL,
    card_type Varchar(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id)
);

CREATE TABLE IF NOT EXISTS CATEGORIES (
    category_id INT PRIMARY KEY,
    category_name Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS PRODUCTS (
    product_id INT PRIMARY KEY,
    category_id INT NOT NULL,
    product_name Varchar(255) NOT NULL,
    recipe TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES CATEGORIES(category_id)
);

CREATE TABLE IF NOT EXISTS INGREDIENTS (
    ingredient_id INT PRIMARY KEY,
    ingredient_name Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ALLERGENS (
    allergen_id INT PRIMARY KEY,
    allergen_name Varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS JOBS (
    job_id INT PRIMARY KEY,
    department_name Varchar(255) NOT NULL,
    job_title Varchar(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS EMPLOYEES (
    employee_id INT PRIMARY KEY,
    manager_id INT,
    job_id INT NOT NULL,
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
    applicant_id INT PRIMARY KEY,
    job_id INT NOT NULL,
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
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id),
    FOREIGN KEY (product_id) REFERENCES PRODUCTS(product_id)
); 

CREATE TABLE IF NOT EXISTS INGREDIENTS_PRODUCTS(
    product_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    PRIMARY KEY (product_id, ingredient_id),
    FOREIGN KEY (product_id) REFERENCES PRODUCTS(product_id),
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS(ingredient_id)
);

CREATE TABLE IF NOT EXISTS ALLERGEN_INGREDIENTS(
    allergen_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    PRIMARY KEY (allergen_id, ingredient_id),
    FOREIGN KEY (allergen_id) REFERENCES ALLERGENS(allergen_id),
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS(ingredient_id)
);

