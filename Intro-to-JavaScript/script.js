
const database = [
    {
        username: "John",
        password:"supersecret"
    },
    {
        username: "Sally",
        password:"supersecret2"
    },
    {
        username: "Frank",
        password:"supersecret3"
    }
    

];

const newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning, lol"
    },
    {
        username: "Sally",
        timeline: "posted"
    },
    {
        username: "Sally Jones",
        timeline: "posted Sally's birthday"
    }
];

 const userNamePrompt = prompt("What's your username?");
 const passwordPrompt = prompt("What's your password?");


 const auth = function (username, pwd) {
    if (database[0].username === username && database[0].password === pwd) {
        //console.log(database[0].username, username, pwd)
        alert("logged in")
     } else {
        alert("scam")
     }
 }

 // not sure if this is correct
 const auth2 = function(username, pwd){
    database.forEach(item.username === username && item.password === pwd) ;{
        alert("logged in")
    }
 }

const isUserValid = function(usr, pwd){
  for (let i =0 ;i < database.length; i++){
    if(database[i].username === usr && database[i].password === pwd) {
        return true;
    }
  }
  return false;
}
 
const signIn = function(usr, pwd){
  if (isUserValid(usr, pwd)) {
    console.log(newsFeed)
  } else {
    alert("scam alert")
  }
}

 auth(userNamePrompt, passwordPrompt )

 auth2(userNamePrompt, passwordPrompt)

 signIn(userNamePrompt, passwordPrompt)