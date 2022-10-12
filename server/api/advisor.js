const express = require("express");
const router = express.Router();
const Advisor = require(`../models/Advisor`)
const fs = require("fs");

//GET

router.get('/', async (req, res) => {
    try {
        console.log(req.query.displayName);
        console.log(req.query.categoryName);
        const advisors = await Advisor.find({
            displayName: { $regex: req.query.displayName ?? "", $options: "i" },
            "categoriesCollection.items.displayName": { $regex: req.query.categoryName ?? "", $options: "i" },
        })
        res.json({ success: true, advisors })
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "loi" })
    }
})

router.put('/active/:id', async (req, res) => {
    console.log(req);
    try {
        fs.readFile("../data.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const data = JSON.parse(jsonString);
            data.data.advisorProfileCollection.items.forEach((item, index) => {
                if (req.params.id == item.sys.id) {
                    data.data.advisorProfileCollection.items[index].status = false;
                }
            })
            const result = JSON.stringify(data, null, "\t")
            fs.writeFile('../data.json', result, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
        });
        res.json({ success: true, message: "success" })

    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "loi" })
    }
})

router.put('/disable/:id', async (req, res) => {
    // Edit Json File
    try {
        fs.readFile("../data.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const data = JSON.parse(jsonString);
            data.data.advisorProfileCollection.items.forEach((item, index) => {
                if (req.params.id == item.sys.id) {
                    data.data.advisorProfileCollection.items[index].status = false;
                }
            })
            const result = JSON.stringify(data, null, "\t")
            fs.writeFile('../data.json', result, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
        });
        res.json({ success: true, message: "success" })

    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "loi" })
    }
})





//POST
router.post("/", async (req, res) => {
    try {
        res.json(createNewAdvisor(req.body))
    } catch (error) {
        console.log(error)
    }
})

//POST
router.post("/many", async (req, res) => {
    const listData = req.body;
    try {
        for (item of listData) {
            createNewAdvisor(item)
        }
        res.json({ success: true, message: "success" })
    } catch (error) {
        console.log(error)
    }
})


async function createNewAdvisor(data) {
    const {
        title,
        displayName,
        email,
        phone,
        avatarUrl,
        categoriesCollection,
        skillsCollection
    } = data;


    const newAdvisor = new Advisor({
        title,
        displayName,
        email,
        phone,
        avatarUrl,
        categoriesCollection,
        skillsCollection
    })
    await newAdvisor.save();
    return { success: true, message: "succcess", advisor: newAdvisor };
}

module.exports = router;