// EXERCISE 1

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"]; // declaring "hof" (Hall of Famers) variable and storing an array of strings

var notHof = hof.pop(); // remove "Bonner" from hof array and store into "notHof" variable declared

console.log(notHof); // log new "notHof" (Not Hall of Famers) variable to console
console.log(hof); // log original list to console



// EXERCISE 2

var testMenu = [
"McPizza Burger",
"McFly Burger",
"McLinguine",
"McChar-Siu Bau",
"McChop-Chae",
"McPancit"
]; // declare "testMenu" variable and store an array of strings inside

testMenu.splice(2,2); // splice "testMenu" starting at index 2 and removing 2 elements to remove "McLinguine" and "McChar-Siu Bau".
console.log(testMenu); // log updated "testMenu" to console



// EXERCISE 3

var westSide = ["Dre", "2Pac", "Snoop"]; // declares an array of strings labeled as "westSide"
var eastSide = ["Biggie", "Diddy", "Craig Mack"]; // declares an array of strings labeled as "eastSide"

var oneLove = westSide.concat(eastSide); // concatenate "westSide" and "eastSide" variables and store concatenation result in "oneLove variable"
console.log(oneLove); // log "oneLove" variable to console



// EXERCISE 4

var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"
]; // declares a variable coined "fbFriends" and stores inside of it an array of strings

var unFriend = fbFriends.slice(1, 4);  // splice "fbFriends", start at index 1 and end at index 4 to remove "Yeezy", "Kimmy K" and "Lamar Odom".
console.log(unFriend); // log "unFriend" variable to the console



// EXERCISE 5



var user1 = {

first_name: "Denise",

last_name: "Britt",

company: "Per Scholas",

department: "Software Engineering"

}; // creates a user profile object and stores inside the variable "user1". 

console.log(user1); // log user1 to console
 