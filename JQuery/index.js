var buttonColors = ["red", "yellow", "blue", "green"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour); 

    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".item").click(function() {
    var userColour  = $(this).attr("class");
    var userChosenColour = userColour.slice(5);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
}); 

function playSound(sound) {
    var audio = new Audio("audios/" + sound + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");

    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    },100);

}