const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const menu =  require('./routes/Menu.js')
app.use("/menu", menu)

const category =  require('./routes/Category.js')
app.use("/category", category)

const signUp =  require('./routes/SignUp.js')
app.use("/singUp", signUp)

const login =  require('./routes/Login.js')
app.use("/login", login)

const myAccount =  require('./routes/MyAccount.js')
app.use("/myAccount", myAccount)

const requestLog =  require('./routes/RequestLog.js')
app.use("/requestLog", requestLog)

const totalRequest =  require('./routes/TotalRequest.js')
app.use("/totalRequest", totalRequest)


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
