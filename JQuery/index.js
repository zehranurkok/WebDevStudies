let buttonColors = ["red", "yellow", "blue", "green"];

let gamePattern = [];

let userClickedPattern = [];

let level = 1;


$(document).one("keypress", function(){
    nextSequence();
});

$(".item").click(function () {
    var userColour  = $(this).attr("class");
    var userChosenColour = userColour.slice(5);
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
}); 

function nextSequence() {
    userClickedPattern = [];
    $("h1").text("Level " + level);

    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour); 

    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

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

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            level++;
            $("h1").text("Level " + level);
            setTimeout(nextSequence,500);
        }
    }
    else{
        playSound("wrong");
        level = 1;
        $("h1").text("Game Over! Let's Press A Key And Start The Game.");
        $(document).one("keypress", function(){
            gamePattern = [];
            nextSequence();
        });
    }
}
document.getElementById("touch").addEventListener("touchstart",nextSequence);
