//Dependecies established:

var express = require("express"); 
var path = require('path');
var bodyParser = require("body-parser");

var app = express(); 
var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


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

//Listen to the port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


var checkReservations = function() {
  var reservations = [];
  var waitlist = [];
  // if reservations over 5, push to waitlist array
  
}

var viewReservations = function(){
 	 connection.query("SELECT * FROM products", function(err, res) {
    var productsArray = [];

        for (var i = 0;i<res.length;i++){
          //console.log(res[i].product_name + ' ' + '(id: ' + res[i].item_id + ')' + ' - ' + 'count: ' + res[i].stock_quantity);
          res[i].name = res[i].product_name;
          productsArray.push(res[i]);
          console.log(productsArray);
        }

    if (err) throw err;
   });
}


app.get("/", function(req, res) {
  //res.send("Welcome to the Home Page!");
  res.sendFile(path.join(__dirname, "index.html"));
});
/*app.get("/reserve", function(req, res) {
  // res.send("Welcome to the Home Page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function(req, res) {
  // res.send("Welcome to the Home Page!")
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/table", function(req, res) {
  // res.send("Welcome to the Home Page!")
  res.sendFile(path.join(__dirname, ""));
});

app.get("/api/waitlist", function(req, res) {
  // res.send("Welcome to the Home Page!")
  res.sendFile(path.join(__dirname, "indedx.html"));
});*/



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
