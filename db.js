const db = require('mysql')

const conn = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MYSQL2werRmU',
    database: 'gallery'
})

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")

    conn.query("CREATE TABLE images (name VARCHAR(255), address VARCHAR(255))", (err, result) => {
        if (err) throw err;
        console.log("Table created!");
    })
})