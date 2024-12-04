var express = require('express');
const {colors} = require("debug");
const {set} = require("express/lib/application");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    firstName: "John",
    lastName: "Doe",
    dob: "01/01/2000",
    addressLine1: "1234 Default Ave",
    addressLine2: "Apt 001",
    city: "Fresno",
    state: "CA",
    zip: "00000"
  });
});

router.post('/card', function(req, res) {
  console.log(req.body.dateOfBirth)
  res.render('card', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    dateOfBirth: new Date(req.body.dateOfBirth),
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    accountNumber: createAccountNumber(),
    //if you get a new Date with no value, it automatically uses today's date!
    currentDate: new Date(),
    cardClass: getCardClass(req.body.type)
  });
})
module.exports = router;

function createAccountNumber() {
  let accNum = ""
  for (let i = 0; i<5; i++){
    let temp = Math.floor(Math.random()*10);
    accNum += temp;
  }
  return accNum;
}




function getCardClass(type){
  if(type === "Premium"){
    return "premium"
  } else if (type === "Standard") {
    return "standard"
  } else if (type === "Bronze") {
    return "bronze"
  } else {
    return ""
  }
}