var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}


