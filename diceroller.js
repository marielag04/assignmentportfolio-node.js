var dice = {
    sides: 6,
    number = Math.floor(Math.random()),
    return number,
}

var button = document.getElementById('button');
button.onclick = function(){
    var result = diceRoll();
    print(result);
}