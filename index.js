let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);
// console.log("./images/dice" + randomNumber1 + ".png")
// console.log("./images/dice" + randomNumber2 + ".png")
document.querySelector(".img1").setAttribute("src","./images/dice" + randomNumber1 + ".png");
//generate first random image from 6 random images
document.querySelector(".img2").setAttribute("src","./images/dice" + randomNumber2 + ".png");
//generate second random image from 6 random images
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="DRAW";
}  else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}   else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}