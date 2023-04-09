// tasks.js
var express = require('express');
var router = express.Router();
const Task = require("../model/task");

router.get("/", async (req, res) => {
    await Task.find()
        .then( tasks => {
            res.status(200).send(JSON.stringify(tasks));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:content", async(req, res) => {
    await Task.find({ content: { $regex: new RegExp(req.params.content, 'i')} })
        .then( task => {
            res.status(200).send(JSON.stringify(task));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", async(req, res) => {
    await Task.create({
        content: req.body.content,
        status: req.body.status,
        description: req.body.description,
        token: req.body.token
        })
        .then( task => {
            res.status(200).send(JSON.stringify(task));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", async(req, res) => {
    await Task.deleteOne({ _id: req.params.id })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/", async(req, res) => {
    await Task.deleteMany()
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;