const express = require('express')
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.put("/update_name", (req, res) => {
    res.json({ message: "Hello from server - SignUp - UpdateName" });
});

router.put("/update_email", (req, res) => {
    res.json({ message: "Hello from server - SignUp - UpdateEmail" });
});

router.put("/update_pwd", (req, res) => {
    res.json({ message: "Hello from server - SignUp - UpdatePwd" });
});

router.put("/unActivate", (req, res) => {
    res.json({ message: "Hello from server - SignUp - UnActivate" });
});

module.exports = router;
