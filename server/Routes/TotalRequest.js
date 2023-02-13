const express = require('express')
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get("/:IdUser/:Periodo", (req, res) => {
    res.json({ message: "Hello from server - TotalRequest" });
});
router.get("/:IdUser/:Restaurante/:Periodo", (req, res) => {
    res.json({ message: "Hello from server - TotalRequest - Filter" });
});

module.exports = router;
