let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");

let bodyBg = document.querySelector("body");

let gradient = document.querySelector("#gradientText");

let changeColor = function(){
    console.log(color1.value);
    bodyBg.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    gradient.innerHTML = bodyBg.style.background;
}
color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);