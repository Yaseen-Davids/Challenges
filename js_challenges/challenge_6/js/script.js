onload = function() {
    let rainbowColors = ['red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'purple', 'pink', 'black'];

    let rainbow = [
        document.getElementById("red"),
        document.getElementById("orange"),
        document.getElementById("yellow"),
        document.getElementById("green"),
        document.getElementById("lightBlue"),
        document.getElementById("blue"),
        document.getElementById("purple"),
        document.getElementById("pink"),
        document.getElementById("black")
    ];
    
    for (let i = 0; i < rainbow.length; i++){
        rainbow[i].style.backgroundColor = rainbowColors[i];
        rainbow[i].style.height = "70px";
        rainbow[i].style.color = "white";
        rainbow[i].style.textAlign = "center";
        rainbow[i].style.fontSize = "2em";
        rainbow[i].innerHTML = rainbowColors[i];
    }

    // console.log(rainbow[0]);3
}

