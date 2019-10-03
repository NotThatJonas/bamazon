# Bamazon

>An Amazon-like CLI storefront built with mySQL, NODE.js and Inquirer NPM. The app can take in orders from customers, calculate sales price and deplete stock from the store's inventory. Schema.sql file have been included for database creation ranging in amazing relics.

### Deployment

1. Clone repo
2. Run `npm install`
3. Build database from `schema.sql`
4. At command prompt run `node bamazonCustomer.js`


### Create SQL database
- open SQL script, bamazon.sql and run script in MySQL Workbench to create database, bamazon_db.

## Walkthroughs
### 1) Customer View:

* Run node bamazonCustomer.js to view initial product offereings.

![Bamazon_customer_shot1](https://user-images.githubusercontent.com/51797891/66098218-9c13c400-e556-11e9-86ef-9a77e8125026.jpg)

* Choose the item you wish to buy.

![Bamazon_customer_shot2](https://user-images.githubusercontent.com/51797891/66098252-b6e63880-e556-11e9-9060-99b4f8326c78.jpg)

* Enter how many of the product you wish to buy.

![Bamazon_customer_shot3](https://user-images.githubusercontent.com/51797891/66098268-c5345480-e556-11e9-9500-1a02721df80b.jpg)


### 2) Manager View: 

* If a manager selects `View Products for Sale`, the app lists every available item: the item IDs, names, prices, and quantities.

![Bamazon_manager_view](https://user-images.githubusercontent.com/51797891/66098319-fa40a700-e556-11e9-8d0e-4b8f1421d469.jpg)

* If a manager selects `View Low Inventory`, the app lists all items with an inventory count lower than five.

![Bamazon_manager_lowinventory](https://user-images.githubusercontent.com/51797891/66098340-0d537700-e557-11e9-9ee0-0615f5a91b08.jpg)

* If a manager selects `Add to Inventory`, the app displays a prompt that will let the manager "add more" of any item currently in the store.

![Bamazon_manager_addinventory](https://user-images.githubusercontent.com/51797891/66098283-d1b8ad00-e556-11e9-8cd6-a1a27b7d175c.jpg)

* If a manager selects `Add New Product`, the app will allow the manager to add a completely new product to the store.

![Bamazon_manager_addProduct](https://user-images.githubusercontent.com/51797891/66098296-e2692300-e556-11e9-93f2-3f50c3dbdeb6.jpg)


### Technologies Utilized

* mySQL
* NodeJS
* JavaScript
* NPM Inquirer

---

### Author

Joshua Jonas
