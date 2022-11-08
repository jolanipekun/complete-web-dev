let h3 = document.querySelector("h3")
let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let body = document.getElementById("gradient")


const colorPicker = function (){
  return body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

/*color1.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
})*/

color1.addEventListener("input", colorPicker)
color2.addEventListener("input", colorPicker)

/*
color2.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
})
*/