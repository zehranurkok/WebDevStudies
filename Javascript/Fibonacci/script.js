function fibonacciGenerator () {
    var list = [];
    var n = document.getElementById("input").value;
    n = Number(n);
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            list[i] = i;
        } 
        else {
            list[i] = list[i-1] + list[i-2];
        }
        document.getElementById("result").innerHTML = list;
    }
    
}