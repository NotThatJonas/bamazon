# Bamazon

>An Amazon-like CLI storefront built with mySQL, NODE.js and Inquirer NPM. The app can take in orders from customers, calculate sales price and deplete stock from the store's inventory. Schema.sql file have been included for database creation ranging in amazing relics.

### Deployment

1. Clone repo
2. Run `npm install`
3. Build database from `schema.sql` and `seeds_<15 or 100>.sql`
4. At command prompt run `node bamazonCustomer.js`


### Create SQL database
- open SQL script, bamazon.sql and run script in MySQL Workbench to create database, bamazonDB.

## Walkthroughs
### 1) Customer View:



### 2) Manager View: 

* If a manager selects `View Products for Sale`, the app lists every available item: the item IDs, names, prices, and quantities.


* If a manager selects `View Low Inventory`, the app lists all items with an inventory count lower than five.


* If a manager selects `Add to Inventory`, the app displays a prompt that will let the manager "add more" of any item currently in the store.


* If a manager selects `Add New Product`, the app will allow the manager to add a completely new product to the store.


### Technologies Utilized

* mySQL
* NodeJS
* JavaScript
* NPM Inquirer

---

### Author

Joshua Jonas