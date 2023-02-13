const express = require('express')
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.get("/getItems", (req, res) => {
    res.json({ message: "Hello from server - Changing Menu - get items!" });
});
router.post("/addItems", (req, res) => {
    res.json({ message: "Hello from server - Changing Menu - add items!" });
});
router.post("/generateLink", (req, res) => {
    res.json({ message: "Hello from server - Changing Menu - generate link!" });
});
router.put("/edit", (req, res) => {
    res.json({ message: "Hello from server - Changing Menu - edit items!" });
});
router.delete("/remove", (req, res) => {
    res.json({ message: "Hello from server - Changing Menu - delete items!" });
});
module.exports = router;
