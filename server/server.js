import express from "express";
const app = express();

app.get("/", function (req, res) {
    res.json({"users": ["user1", "user2", "user3"]});
});

app.listen(1000, () => console.log("server is running on port 1000"));