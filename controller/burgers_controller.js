var express = require('express');

var router = express.Router();

var burger = require("../model/burger");

router.get("/", function (req, res)
{
    burger.selectAll(data =>
    {
        var bObj = {
            burgers: data
        };
        console.log(bObj);
        res.render("index", bObj);
    });
});

router.post("/api/burgers", function (req, res)
{
    burger.insertOne(["burger_name", "devouered"], [req.body.burger_name, false], function (result)
    {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res)
{
    var condition = "id = " + req.params.id;

    console.log("condition = " + condition);

    burger.updateOne({
        devouered: req.body.devouered
    },
        condition,
        function (result)
        {
            if (result.changedRows === 0)
            {
                return res.status(404).end();
            }

            res.status(200).end();
        }
    );
});

module.exports = router;