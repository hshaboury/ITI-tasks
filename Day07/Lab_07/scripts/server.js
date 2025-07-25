var formData = window.location.search;
var dataSplitted = formData.split("&"); 
var gender = dataSplitted[2].substring(7);
var name = dataSplitted[0].substring(6);
var color = dataSplitted[3].substring(6);

document.writeln("<div>");
if (gender == "male") {
    document.writeln("<img src=" + "images/male.png" + ">");
}
else {
    document.writeln("<img src=" + "images/female.png" + ">");
}
document.writeln("<span>Welcome&nbsp</span>");
document.writeln("<font Color=" + color + ">" + name + "</font>");

document.writeln("</div>");