
const todos = [
    "clean room",
    "Gym / Exercise",
    "Message ",
    "Aws research",
    "study javascript"
];

for (let i=0; i < todos.length; i++){
  todos[i] = todos[i] + "!"
}

let counterOne = 0;

while (counterOne < 10){
    counterOne++
}

counterTwo = 10;
do {
    counterTwo--;
} while (counterTwo > 0);


todos.forEach(element => {
    console.log(element+ "!");
});