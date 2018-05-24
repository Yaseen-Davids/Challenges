onload = function headerSmooth() {
    document.getElementById("myHeader").style.width = "34%";
    setInterval(slogan, 1500);
    function slogan() {
        document.getElementById("mySlogan").style.width = "17.5%";
    }
    
}