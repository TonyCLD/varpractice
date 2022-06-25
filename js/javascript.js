
 var headerE1 = document.querySelector('h1');
 headerE1.innerText = 'Art slideshow';
 headerE1.style.color = 'rgb(52, 98, 74)';
 headerE1.style.marginLeft = '20px';

var artShow1 = 39
console.log(btnslidenav1);

console.log(artShow1);
console.log(myArt);
 
const element = document.getElementById("btnslidenav1");
element.addEventListener("click", function() {
    document.getElementById("myArt").src = "assets/coffeenadonut.png"
});

 if (artShow1 >= 1 && artShow1 < 10) {
     document.getElementById("myArt").src = "assets/coffeenadonut.png";
 }

 if (artShow1 >= 11 && artShow1 < 20) {
     document.getElementById("myArt").src = "assets/oldman.jpg";
 }

 if (artShow1 >= 21 && artShow1 < 30) {
     document.getElementById("myArt").src = "assets/bread.jpg";
 }

 if (artShow1 >= 31 && artShow1 < 40) {
     document.getElementById("myArt").src = "assets/logopng.png";
 }

 if (artShow1 >= 41 && artShow1 < 50) { 
    document.getElementById("myArt").src = "assets/water.jpg";
 }


