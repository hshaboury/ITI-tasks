var userColor = prompt("Choose a color: red, green, or blue").toLowerCase();

// validation
if (userColor !== "red" && userColor !== "green" && userColor !== "blue") {
  alert("Invalid color, defaulting to black.");
  userColor = "black";
}


var name = prompt(" name:");
var telephone = prompt(" telephone number:");
var mobile = prompt(" mobile number:");
var email = prompt(" email address:");


var today = new Date();
var formattedDate = today.toDateString();


var htmlContent = 
  "<p style='color:" + userColor + "'>Welcome dear guest " + name + "</p>" +
  "<p style='color:" + userColor + "'>Your telephone number is " + telephone + "</p>" +
  "<p style='color:" + userColor + "'>Your mobile number is " + mobile + "</p>" +
  "<p style='color:" + userColor + "'>Your email address is " + email + "</p>" +
  "<p><span style='color:" + userColor + "'>Today is</span> " + formattedDate + "</p>";


document.getElementById("output").innerHTML = htmlContent;
