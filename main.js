const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "medo",
});
// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Perform database operations
connection.query("SELECT * FROM users", (err, rows) => {
  if (err) {
    console.error("Error executing query: ", err);
    return;
  }
  console.log("Data received from MySQL database:");
  console.log(rows);
});

// Close the database connection
connection.end((err) => {
  if (err) {
    console.error("Error closing MySQL database connection: ", err);
    return;
  }
  console.log("MySQL database connection closed");
});
let balance = 0;
let winning = 0;
let odds = 5;
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter Amount to deposit: `, (amount) => {
  balance += parseFloat(amount);
  console.log(`Your balance is: Ksh ${balance}`);
  readline.question(`Enter Bet Amount: `, (betAmount) => {
    if (parseFloat(betAmount) > balance) {
      console.log("Insufficient balance. Kindly top up.");
    } else {
      balance -= parseFloat(betAmount);
      winning = betAmount * odds;
      console.log(
        `Bet placed successfully. Possible outcome is ${winning} Remaining balance: Ksh ${balance}`
      );
    }
    readline.close(); // Close the readline interface after the second question
  });
});
