
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE bamazonProducts (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(7,2) NOT NULL,
  stock_quantity DECIMAL(7,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("holy grail", "relics", 5.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("excalibur", "relics", 9.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("pirate hook", "costume", 8.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("shroud", "home", 12.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("tin star", "toy", 5.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("lego", "toy", 9.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("bike", "sport", 8.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("shovel", "home", 12.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("basketball", "sport", 8.00, 10);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ("computer", "electronics", 12.00, 10);

SELECT * FROM bamazonProducts;