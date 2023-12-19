let myTitle = document.getElementById("myTitle");
myTitle.innerText = "Changed text are here !!! (:D)";

let paragraphs = document.getElementsByClassName("paragraph");
paragraphs[0].innerText = "This is an exercise. It's pretty easy BUT CHANGED (:D)";
paragraphs[1].innerText = "No really, It's easy! BUT CHANGED (:D)";

let text = document.getElementsByTagName("h1")[1];
otherText = text.innerText = "also this IS CHANGED (:D)";

let smallText = document.getElementsByTagName("h3")[0];
otherSmallText = smallText.innerText = "AND also THIS is CHANGED (:D)";




