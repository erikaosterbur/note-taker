const router = require('express').Router();
const fs = require("fs");
let notes = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.json(notes);
});
  
router.post('/', (req, res) => {
  if (req.body) { 
    const id = uuidv4();
    req.body["id"] = id
    notes.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully");
    };
    }) 
    res.json('Note added successfully');
  } else {
    console.error("Error"); 
  }
});  
  
module.exports = router;