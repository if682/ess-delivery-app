const express = require('express')
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get("/:idUser", (req, res) => {
    res.json({ message: "Hello from server - RequestLog" });
});

router.get("/:idUser/:name/:periodo/:local", (req, res) => {
    res.json({ message: "Hello from server - RequestLog - Filter" });
});

router.get("/help/:name/:idHelpRequest", (req, res) => {
    res.json({ message: "Hello from server - RequestLog - Help/Get" });
});
router.post("/help", (req, res) => {
    res.json({ message: "Hello from server - RequestLog - Help/Post" });
});


module.exports = router;