const express = require('express')
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.post("/", (req, res) => {
    res.json({ message: "Hello from server - SignUp" });
});
module.exports = router;
