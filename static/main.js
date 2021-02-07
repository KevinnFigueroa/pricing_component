var change = false;

function changePlan() {
    if (!change) {
        document.getElementById("bottom-switch").style.transform = "translateX(100%)";
        document.getElementById("price1").innerHTML = "$19.99"
        document.getElementById("price2").innerHTML = "$24.99"
        document.getElementById("price3").innerHTML = "$39.99"
        change = true;
    } else {
        document.getElementById("bottom-switch").style.transform = "translateX(0%)";
        document.getElementById("price1").innerHTML = "$199.99"
        document.getElementById("price2").innerHTML = "$249.99"
        document.getElementById("price3").innerHTML = "$399.99"
        change = false;
    }
}