var line1 = "this message will be displayed character by character :)";
var line2 = "few seconds and this window will terminate...";

var i = 0;
var j = 0;


let interval = setInterval(function() {

    if (i < line1.length)
    {
        document.getElementById("line1").innerHTML += line1.charAt(i);
        i++;
    }
    else
    {
        if (j < line2.length)
        {
            document.getElementById("line2").innerHTML += line2.charAt(j);
            j++;
        }
        else
        {
            setTimeout(function() {window.close();}, 2000);
        }
    }
}, 80); 