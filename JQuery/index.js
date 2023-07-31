let buttonColors = ["red", "yellow", "blue", "green"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;


$(document).one("keypress", function(){
    nextSequence();
});
$(".touch").one("touchstart", function(){
    $(".container").addEventListener("touchcancel",function(){
        nextSequence();
    });
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
    level++;
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
            
            $("h1").text("Level " + level);
            setTimeout(nextSequence,500);
        }
    }
    else{
        playSound("wrong");
        level = 0;
        $("h1").text("Game Over! Play Again!");
        $(document).one("keypress", function(){
            level = 0;
            gamePattern = [];
            nextSequence();
        });
    }
}