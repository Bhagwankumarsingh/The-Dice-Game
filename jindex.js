var randomnum1=Math.floor(Math.random()*6)+1;
 //1-6
var randomdiceimage="dice"+randomnum1+".png";

var randomimagesource=randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);


var randomnum2=Math.floor(Math.random()*6)+1;
var randomimagesource2="dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="player 1 wins!🚩";
}
else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}