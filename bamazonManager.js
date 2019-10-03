var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayMenu();
});

var displayMenu = function () {
    inquirer.prompt({
        name: 'action',
        type: 'rawlist',
        message: '\n\nChoose an action:',
        choices: [
            'View Products for Sale',
            'View Low Inventory',
            'Add to Inventory',
            'Add New Product',
            'Remove A Product'
        ]
    }).then((answer) => {
        switch (answer.action) {
            case 'View Products for Sale':
                viewActiveProducts();
                break;
            case 'View Low Inventory':
                viewLowInventory();
                break;
            case 'Add to Inventory':
                addToInventory();
                break;
            case 'Add New Product':
                addNewProduct();
                break;
            case 'Remove A Product':
                deleteProduct();
                break;
        }
    });
};

var viewActiveProducts = function () {
    // Connect to database
    connection.query(
        // Select all fromsql database
        'SELECT * FROM bamazonProducts', function (err, res) {
            if (err) throw err;
            console.log('\n');
            // Console table oto display choices
            console.table(res);
            //prompt user to make a choice
            // displayMenu();
            connection.end();
        }
    )
}

var viewLowInventory = function () {
    // Connect to database
    connection.query(
        // Select all fromsql database
        'SELECT * FROM bamazonProducts WHERE stock_quantity < 5 ORDER BY stock_quantity DESC', function (err, res) {
            if (err) throw err;
            console.table(res);
            connection.end();
        }
    )
}

var addNewProduct = function () {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the product name:'
        },
        {
            name: 'department',
            type: 'input',
            message: 'Enter the department:'
        },
        {
            name: 'price',
            type: 'input',
            message: 'Enter the price:'
        },
        {
            name: 'stockNum',
            type: 'input',
            message: 'Enter the number of items:'
        }
    ]).then((answers) => {
        connection.query('INSERT INTO bamazonProducts SET ?', {
            product_name: answers.name,
            department_name: answers.department,
            price: answers.price,
            stock_quantity: answers.stockNum
        }, (err, res) => {
            if (err) throw err;
            console.table(res);
            viewActiveProducts();
        });
    });
};


var addToInventory = function () {
    connection.query(
        // Select all fromsql database
        'SELECT * FROM bamazonProducts', function (err, res) {
            if (err) throw err;
            console.table(res);
            inquirer.prompt([

                {
                    name: 'name',
                    type: 'input',
                    message: 'Enter the product name:'
                },
                {
                    name: 'stockNum',
                    type: 'input',
                    message: 'Enter the number of items:'
                }
            ]).then((answers) => {
                console.log('stock', answers);
                connection.query(`UPDATE bamazonProducts SET stock_quantity = ${answers.stockNum} WHERE product_name = "${answers.product_name}";`), 

                 (err, res) => {
                    if (err) throw err;
                    console.table(res);
                    viewActiveProducts();
                };
            });
        })
    };
