var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});




function nextsequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(key){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    var activeColor=$("."+currentColor);
    activeColor.addClass("pressed");
    setTimeout(function(){
        activeColor.removeClass("pressed");
    },100); 
}
