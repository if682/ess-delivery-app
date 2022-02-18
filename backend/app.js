const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const fs = require("fs")
const crypto = require('crypto');



const app = express();


app.use(cors());
app.use(bodyParser.json());


function getData(){
  const rawJsonData = fs.readFileSync("data/data.json")
  const jsonData = JSON.parse(rawJsonData)

  return jsonData
}

function saveData(data){
  const jsonData = getData()

  const name = data.firstName+data.secondName
  const hash = crypto.createHash('md5').update(name).digest('hex')

  jsonData[hash] = data
  fs.writeFileSync("data/data.json",JSON.stringify(jsonData))
}


app.get("/dataFromServer", async (req, res) => {
  
  try {
    const jsonData = getData()
    const cleanData = Object.values(jsonData)
    res.status(200).send(cleanData)
  } catch (err) {
    console.error(err)
    res.status(400).send({})
  }
})



app.post("/dataToServer", async (req, res) => {
  try {
    const data = req.body
    console.log(req)
    saveData(data)
    res.status(200).send(JSON.stringify({res:"Submit successful"}));
  } catch (err) {
    console.error(err)
    res.status(400).send({})
  }
})




app.listen(1337, _ => {
  console.log("Server running on port 1337");
});

