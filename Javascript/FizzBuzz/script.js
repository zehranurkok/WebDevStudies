function Game(){
    let number = document.getElementById("input").value;
    number = Number(number);

    if (number % 5 === 0) {
        if (number % 3 == 0) {
            document.getElementById("result").innerHTML = "FizzBuzz!";
        } else {
            document.getElementById("result").innerHTML = "Buzz!";
        }
    } else {
        if (number % 3 !== 0) {
            document.getElementById("result").innerHTML = "Upss!";
        } else {
            document.getElementById("result").innerHTML = "Fizz!";
        }
    }
}