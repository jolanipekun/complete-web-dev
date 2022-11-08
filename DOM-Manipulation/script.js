/*
const button = document.getElementsByTagName("button")[0]

button.addEventListener("click", function() {
    console.log('click')
})
*/

// Grab items 
let button = document.getElementById("enter")
let input = document.getElementById("userinput")
let ul = document.querySelector("ul")

const inputLength = function (){
    return input.value.length
}

// We should strive to have every thing broken down into functions

const appending = function(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = "";
}

const addListAfterClick = function(){
    if(inputLength() > 0 && event.code === "Enter"){
        appending();
     } 
}

button.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', function(event){
    if(inputLength() > 0 && event.code === "Enter"){
       appending();
    }  
})