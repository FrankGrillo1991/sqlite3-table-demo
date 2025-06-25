const sqlite3 = require('sqlite3').verbose();

// Connect to a database (in this example, a new file-based database)
const db = new sqlite3.Database('mydatabase.db');

// Define the SQL statement to create a table
const createTable = `CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL)
`;

// Execute the SQL statement to create the table
db.run(createTable, function (err) {
    if (err) {
        return console.error('Error creating table:', err.message);
    } 
    console.log('Table created successfully');
});

// Close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Database connection closed');
});