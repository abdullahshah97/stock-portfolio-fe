import express from "express";
import database from "./src/config/sqlConnection.js";

const app = express();

app.listen(1000, () => {
    console.log("server is running on port 1000")
});

app.get("/createDatabase", (req, res) => {
    let databaseName = "first_db";
    let createDatabaseQuery = `CREATE DATABASE ${databaseName}`;

    database.query(createDatabaseQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("database created");

        let useQuery = `USE ${databaseName}`;
        database.query(useQuery, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
});
