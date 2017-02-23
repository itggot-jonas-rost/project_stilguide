function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function popup(){
    var person = prompt("YOU HAVE WON THE NEW IPHONE 7S! PLEASE WRITE YOUR E-MAIL ADRESS IN THE BOX BELOW:", "");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "We will contact you on " + person + " soon!";
    }
}
function pop_slut(){
    alert("Alla produkter är tyvärr slut på vårt internetlager. Hör gärna av dig om du undrar något.");
}



// window.onclick = function(event) {
//   if (!event.target.matches('.nav')) {

//     var dropdowns = document.getElementsByClassName("nav-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }