// JS Object
// Q no 1
// var itemsArray = [
//   { name: "juice", price: 50, quantity: 3 },
//   { name: "cookie", price: 30, quantity: 9 },
//   { name: "shirt", price: 880, quantity: 1 },
//   { name: "pen", price: 100, quantity: 2 },
// ];
// var totalPriceOfJucie = itemsArray[0].price + itemsArray[0].quantity;
// var totalPriceOfCookie = itemsArray[1].price + itemsArray[1].quantity;
// var totalPriceOfShirt = itemsArray[2].price + itemsArray[2].quantity;
// var totalPriceOfPen = itemsArray[3].price + itemsArray[3].quantity;
// var totalPrice =
//   totalPriceOfJucie + totalPriceOfCookie + totalPriceOfPen + totalPriceOfShirt;
// alert("Total price is " + totalPrice);

// JS Object
// Q no 2
// var obj = {
//   name: "Hanzala",
//   email: "hanzala.ahmed181@gmail.com",
//   password: "hello",
//   age: 18,
//   gender: "male",
//   city: "Karachi",
//   country: "Pakistan",
// };
// var check1 = "age" in obj;
// alert("Age " + check1)
// var check2 = "country" in obj;
// alert("Country " + check2)

// JS Objects
// Q no 3
// function Constructor(name){
//   this.name = name,
//   this.age = 18,
//   this.gender = "male",
//   this.city = "Karachi",
//   this.country = "Pakistan"
// }
// var obj = new Constructor("hanzala")
// console.log(obj);

// JS Objects
// Q no 4
function GetData(name, address, education, gender) {
  this.name = name;
  this.address = address;
  this.gender = gender;
  this.education = education;
}

var name;
var address;
var education;
var gender;
function getData() {
  name = document.getElementById("name").value;
  address = document.getElementById("address").value;
  education = document.getElementById("education").value;
  var male = document.getElementById("male").value;
  var maleCheck = document.querySelector("input[id = 'male']:checked");
  var female = document.getElementById("female").value;
  var femaleCheck = document.querySelector("input[id = 'female']:checked");
  if (maleCheck !== null) {
    gender = male;
  } else if (femaleCheck != null) {
    gender = female;
  }
  var obj = new GetData(name, address, education, gender);
  console.log(obj);
}