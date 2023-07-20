
var button = document.getElementById("demobutton");
var teleport = document.getElementById("anibutton");
const windowBox = document.body.getBoundingClientRect();
console.log(windowBox.top, windowBox.bottom, windowBox.left, windowBox.right);
const OffSet = "100px"

function jump() {
    var x = Math.round((Math.random() * 101)) + "%",
        y = Math.round((Math.random() * 101)) + "%";
    teleport.style.position = "fixed";

    console.log(x,y);
while (x>windowBox.right || x<windowBox.left){
    x = Math.round((Math.random() * 101)) + "%";
}

while (y>windowBox.bottom || y<windowBox.top){
    y = Math.round((Math.random() * 101)) + "%";
}
    teleport.style.left = x;
    teleport.style.top = y;
}

button.addEventListener("mouseover", function(){
    button.innerHTML = "Click?"
});

button.addEventListener("mouseout", function(){
    button.innerHTML = "Click Me!"
});

button.addEventListener("click", function(){
    alert("Someone clicked the button, was it you?")
});

teleport.addEventListener("click",function(){
    teleport.innerHTML = "Teleporting..."
    jump()
});

teleport.addEventListener("mouseover", function(){
    teleport.innerHTML = "Click to Teleport!"
});

teleport.addEventListener("mouseout", function(){
    teleport.innerHTML = "Teleport"
});
