import express from "express";
import SetupDatabase from "./src/config/setup-db.js";
import database from "./src/config/sqlConnection.js";

const app = express();

app.listen(1000, () => {
    console.log("server is running on port 1000")
});

app.get("/createDatabase", (req, res) => {
    SetupDatabase();
});
