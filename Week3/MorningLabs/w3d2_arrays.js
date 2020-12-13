

/** EXERCISE 2 **/

var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

]; //declares variable labeled "shoppingList" and stores inside of it an array of strings

shoppingList.push("hendricks gin"); //pushes string "hendricks gin" into the "shoppingList" array at the end
console.log(shoppingList); // logs "shoppinList" to console to display new contents



/** EXERCISE 3 **/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"]; //declares variable, names it "yoda" and stores inside of it an array of strings

yoda = yoda.reverse(); // reverses the order of strings inside of "yoda" array
yoda = yoda.join(' '); // joins together strings inside "yoda" array, seperating them by a space, and stores the new array contents back into "yoda"
console.log(yoda); // logs "yoda" array to console



/** EXERCISE 4 **/


var waitList = ["Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ]; 
//declares an variable named "waitList" and stores inside of it an array of 5 strings

var nowServing = " "; //declares an variable named "nowServing" and stores inside of it an empty string


// for loop: var "i" is set at 0. As long as "i" is less than 5, "i" will increase it's value by 1 and the loop will restart
for (var i = 0; i < 5; i++) {
  nowServing = waitList.shift(); // removes the last element of "waitLIst" and pops the returned value into "nowServing" variable
  console.log('Now Serving: ' + nowServing); // combines string "Now serving:" and the value of "nowServing" and logs it to the console
  console.log('Wait List: '+ waitList); // combines string "waitList:" and the value of "waitList" and logs it to the console
}
console.log("No more customers on wait list.") //logs the string "No more customers on wait list." to console



/** EXERCISE 5 **/

var shoe = ["just", "do", "it"]; // declares a variable named shoe and stores inside of it an array of strings

var shoeString = shoe.join(" ");//joins strings inside "shoe" array, seperating them by a space, stores new "shoe" array contents into newly declared "shoeString" variable

console.log(shoeString); // log variable "shoeString" to console

