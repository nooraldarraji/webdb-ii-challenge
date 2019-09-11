const express = require("express");
const db = require("./data/db-config");
const server = express();

server.use(express.json());


server.get("/", (req, res) => {
    db("cars")
        .then(cars => {
            res
                .json(cars)
        })
        .catch(() => {
            res
                .status(500)
                .json({ message: "Failed to retrieve the cars" })
        })
})

server.post("/", (req, res) => {
    const carData = req.body;
    db('cars')
        .insert(carData)
        .then(ids => {
            db("cars")
                .where({ id: ids[0] })
                .then(results => {
                    res
                    .status(201)
                    .json(results);
                });
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "Failed to save the data" });
        });
});

const port = 8000;

server.listen(port, () => {
    console.log(`Running on port ${port}`)
});