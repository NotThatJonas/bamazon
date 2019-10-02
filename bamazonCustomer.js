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
    displayItems();
});

var displayItems = function () {
    // Connect to database
    connection.query(
        // Select all fromsql database
        'SELECT * FROM bamazonProducts', function (err, res) {
            if (err) throw err;
            console.log('\n');
            // Console table oto display choices
            console.table(res);
            //prompt user to make a choice
            promptUser();
        }
    )
}

function promptUser() {
    inquirer.prompt({
        type: "list",
        choices: ["What item would you like to buy", "QUIT"],
        name: "thingToDo",
        message: "What do you want to do?"
    }).then(function (answers) {
        if (answers.thingToDo === "What item would you like to buy") {
            purchaseItem();
        } else {
            connection.end()
        }
    })
}

function purchaseItem() {
    // console.log('this will purchase');

    connection.query("SELECT * FROM bamazonProducts", function (err, res) {
        if (err) throw err;
        var userChoice = [];
        for (var i = 0; i < res.length; i++) {
            // Push products to an array to store
            userChoice.push(res[i].product_name);  
        }
        inquirer.prompt([
            {
                type: 'list',
                message: 'Which item ID would you like to purchase?',
                name: 'productChoice',
                choices: userChoice
            },
            {
                type: 'input',
                message: 'How many of these items would you like to purchase?',
                name: 'numItems'
            }
        ])
            .then(function (answer) {
                stock = res[userChoice.indexOf(answer.productChoice)].stock_quantity;
                // update new stock
                newStock = stock - answer.numItems;
                //check items quantity and if quantiy < count sell product otherwise not enough
                if (answer.numItems <= stock) {
                    connection.query(
                        // insert new stock quantity into the database
                        "UPDATE bamazonProducts SET ? WHERE ?",
                        [
                            {
                                stock_quantity: newStock
                            },
                            {
                                product_name: answer.productChoice
                            }
                        ],
                        function (err) {
                            if (err) throw err;
                            console.log('Thank you for your purchase!');
                            console.log("Your total is: " + answer.numItems * res[0].price)
                            connection.end();
                        } 
                    ); 
                } else if (answer.numItems > stock) {
                    console.log('Insufficient stock!');
                    connection.end();
                }
            })
    });
}

