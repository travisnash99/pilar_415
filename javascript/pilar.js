//Dependecies established:
const fs = require('fs');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var mysql = require("mysql");

var app = express();
var PORT = 8080;

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "pilar"
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//Listen to the port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//A list of preReservations to populate this page.
var preReservations = [{
  //routeName: "",
  name: "Yoda",
  email: "yoda@me.com",
  phone: "555-555-5555",
  id: "Eat, I shall"
}, {
  //routeName: "",
  name: "Ash Ketchum",
  email: "ash@pallettown.com",
  phone: "444-444-4444",
  id: "pika pika mutha"
}, {
  //routeName: "",
  name: "Obi Wan Kenobi",
  email: "jedimindtrickz@yahoo.com",
  phone: "123-123-1234",
  id: "not the table you're looking for"
}];

var tableArray = [


]; 

var waitlistArray = [


]; 

app.get("/reserve", function(req, res){
  res.end("reserve.html"); 
  //console.log(req.body);
}); 

app.post("/reserve", function(req, res){
  var newReservation = req.body
  console.log(req.body); 
  console.log(newReservation);
  if (tableArray.length < 5) {
  tableArray.push(newReservation); 
} else {
  waitlistArray.push(newReservation);
  }
});


app.get("/api/table", function(req, res){
  res.json(tableArray); 
}); 

app.get("/api/waitlist", function(req, res){
  res.json(waitlistArray); 
}); 


// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:preReservations?", function(req, res) {
// 	console.log(preReservations);
//   return res.json(preReservations);
// });

//Function that stores the values we get from the HTML 
//ex tableAraray.push($(".name).val().trim()); 
//those values are pushed into one of two arrays. Waitlist & Table




// var checkReservations = function() {
//   var reservations = [];
//   var waitlist = [];
//   // if reservations over 5, push to waitlist array

// }

// // var viewReservations = function(){
// //  	 connection.query("SELECT * FROM reservations", function(err, res) {
// //     var reservationsArray = [];

//         for (var i = 0;i<res.length;i++){
//           //console.log(res[i].product_name + ' ' + '(id: ' + res[i].item_id + ')' + ' - ' + 'count: ' + res[i].stock_quantity);
//           reservationsArray.push(res[i]);
//           console.log(reservationsArray);
//         }

//     if (err) throw err;
//    });
// }

// viewReservations();
//
// app.get("/", function(req, res) {
//   // res.send("Welcome to the Home Page!")
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// app.get("/reserve", function(req, res) {
//   // res.send("Welcome to the Home Page!")
//   res.sendFile(path.join(__dirname, "reserve.html"));
// });
//
// app.get("/table", function(req, res) {
//   // res.send("Welcome to the Home Page!")
//   res.sendFile(path.join(__dirname, "table.html"));
// });
//
// app.get("/api/table", function(req, res) {
//   // res.send("Welcome to the Home Page!")
//   res.sendFile(path.join(__dirname, ""));
// });
//
// app.get("/api/waitlist", function(req, res) {
//   // res.send("Welcome to the Home Page!")
//   res.sendFile(path.join(__dirname, "indedx.html"));
// });



//User Input is submitted on "/reserve", the response is an alert informing you whether one is on the main or wait list.
// The User input submits
//It then displays the number for the website and the customerID

//there's 5 links: "/" for the home page
// "/tables" displays the table page
// "/reserve" displays the reserve page

// "/api/tables" displays an object with all the arrays
// "/api/waitlist" displays an object with all the arrays



//There's going be a get request that's submitted.
//Store name, phone number, email, & ID
