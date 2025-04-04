USE example_db;

/**CREATE TABLE IF NOT EXISTS CUSTOMERS (
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

CREATE TABLE IF NOT EXISTS ORDER_CUSTOMERS (
    order_id INT NOT NULL,
    customer_id INT NOT NULL,
    delivery_address Varchar(255) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id),
    FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id)
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


CREATE TABLE IF NOT EXISTS STOCK_RESTAURANTS(
    restaurant_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity_available INT NOT NULL,
    PRIMARY KEY (restaurant_id, ingredient_id),
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(restaurant_id),
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS(ingredient_id)
); **/


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `ALLERGENS` (
  `allergen_id` int NOT NULL,
  `allergen_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `ALLERGEN_INGREDIENTS` (
  `allergen_id` int NOT NULL,
  `ingredient_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `APPLICANTS` (
  `applicant_id` int NOT NULL,
  `job_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `resume` text NOT NULL,
  `aplication_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `CATEGORIES` (
  `category_id` int NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `CUSTOMERS` (
  `customer_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `EMPLOYEES` (
  `employee_id` int NOT NULL,
  `manager_id` int DEFAULT NULL,
  `job_id` int NOT NULL,
  `restaurant_id` int NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `start_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `INGREDIENTS` (
  `ingredient_id` int NOT NULL,
  `ingredient_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `INGREDIENTS_PRODUCTS` (
  `product_id` int NOT NULL,
  `ingredient_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `JOBS` (
  `job_id` int NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `job_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `ORDERS` (
  `order_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `restaurant_id` int NOT NULL,
  `order_date` date NOT NULL,
  `order_hour` time NOT NULL,
  `order_status` varchar(50) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `ORDER_CUSTOMERS` (
  `order_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `delivery_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `PAYMENTS` (
  `payment_id` int NOT NULL,
  `order_id` int NOT NULL,
  `holder_name` varchar(255) NOT NULL,
  `holder_number` varchar(20) NOT NULL,
  `cvv` varchar(4) NOT NULL,
  `card_type` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `PRODUCTS` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `recipe` text NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `PRODUCTS_ORDER` (
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `RESTAURANTS` (
  `restaurant_id` int NOT NULL,
  `manager_id` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `capacity` int NOT NULL,
  `opening_hours` time NOT NULL,
  `closing_hours` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `STOCK_RESTAURANTS` (
  `restaurant_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  `quantity_available` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


ALTER TABLE `ALLERGENS`
  ADD PRIMARY KEY (`allergen_id`);


ALTER TABLE `ALLERGEN_INGREDIENTS`
  ADD PRIMARY KEY (`allergen_id`,`ingredient_id`),
  ADD KEY `ingredient_id` (`ingredient_id`);


ALTER TABLE `APPLICANTS`
  ADD PRIMARY KEY (`applicant_id`),
  ADD KEY `job_id` (`job_id`);


ALTER TABLE `CATEGORIES`
  ADD PRIMARY KEY (`category_id`);


ALTER TABLE `CUSTOMERS`
  ADD PRIMARY KEY (`customer_id`);


ALTER TABLE `EMPLOYEES`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `restaurant_id` (`restaurant_id`),
  ADD KEY `manager_id` (`manager_id`),
  ADD KEY `job_id` (`job_id`);


ALTER TABLE `INGREDIENTS`
  ADD PRIMARY KEY (`ingredient_id`);


ALTER TABLE `INGREDIENTS_PRODUCTS`
  ADD PRIMARY KEY (`product_id`,`ingredient_id`),
  ADD KEY `ingredient_id` (`ingredient_id`);


ALTER TABLE `JOBS`
  ADD PRIMARY KEY (`job_id`);


ALTER TABLE `ORDERS`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `restaurant_id` (`restaurant_id`);


ALTER TABLE `ORDER_CUSTOMERS`
  ADD KEY `order_id` (`order_id`),
  ADD KEY `customer_id` (`customer_id`);


ALTER TABLE `PAYMENTS`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`);


ALTER TABLE `PRODUCTS`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);


ALTER TABLE `PRODUCTS_ORDER`
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);


ALTER TABLE `RESTAURANTS`
  ADD PRIMARY KEY (`restaurant_id`);


ALTER TABLE `STOCK_RESTAURANTS`
  ADD PRIMARY KEY (`restaurant_id`,`ingredient_id`),
  ADD KEY `ingredient_id` (`ingredient_id`);


ALTER TABLE `ALLERGEN_INGREDIENTS`
  ADD CONSTRAINT `ALLERGEN_INGREDIENTS_ibfk_1` FOREIGN KEY (`allergen_id`) REFERENCES `ALLERGENS` (`allergen_id`),
  ADD CONSTRAINT `ALLERGEN_INGREDIENTS_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `INGREDIENTS` (`ingredient_id`);


ALTER TABLE `APPLICANTS`
  ADD CONSTRAINT `APPLICANTS_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `JOBS` (`job_id`);


ALTER TABLE `EMPLOYEES`
  ADD CONSTRAINT `EMPLOYEES_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `RESTAURANTS` (`restaurant_id`),
  ADD CONSTRAINT `EMPLOYEES_ibfk_2` FOREIGN KEY (`manager_id`) REFERENCES `EMPLOYEES` (`employee_id`),
  ADD CONSTRAINT `EMPLOYEES_ibfk_3` FOREIGN KEY (`job_id`) REFERENCES `JOBS` (`job_id`);


ALTER TABLE `INGREDIENTS_PRODUCTS`
  ADD CONSTRAINT `INGREDIENTS_PRODUCTS_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `PRODUCTS` (`product_id`),
  ADD CONSTRAINT `INGREDIENTS_PRODUCTS_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `INGREDIENTS` (`ingredient_id`);


ALTER TABLE `ORDERS`
  ADD CONSTRAINT `ORDERS_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `CUSTOMERS` (`customer_id`),
  ADD CONSTRAINT `ORDERS_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `RESTAURANTS` (`restaurant_id`);


ALTER TABLE `ORDER_CUSTOMERS`
  ADD CONSTRAINT `ORDER_CUSTOMERS_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `ORDERS` (`order_id`),
  ADD CONSTRAINT `ORDER_CUSTOMERS_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `CUSTOMERS` (`customer_id`);


ALTER TABLE `PAYMENTS`
  ADD CONSTRAINT `PAYMENTS_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `ORDERS` (`order_id`);


ALTER TABLE `PRODUCTS`
  ADD CONSTRAINT `PRODUCTS_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `CATEGORIES` (`category_id`);


ALTER TABLE `PRODUCTS_ORDER`
  ADD CONSTRAINT `PRODUCTS_ORDER_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `ORDERS` (`order_id`),
  ADD CONSTRAINT `PRODUCTS_ORDER_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `PRODUCTS` (`product_id`);


ALTER TABLE `STOCK_RESTAURANTS`
  ADD CONSTRAINT `STOCK_RESTAURANTS_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `RESTAURANTS` (`restaurant_id`),
  ADD CONSTRAINT `STOCK_RESTAURANTS_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `INGREDIENTS` (`ingredient_id`);
COMMIT;

