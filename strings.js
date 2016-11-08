
let testString = "";
var input = document.getElementById("input1");
var button = document.getElementById("button1");


// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal(testString) {
	testString = input.value
	var output = document.getElementById("output");
 return output.innerHTML=testString.split("").reverse().join("");

}

function alphabits(testString) {
	testString = input.value
	var output = document.getElementById("output2");

return output.innerHTML=testString.split("").sort().join("");  

  }  
 

//This Function takes the string passed into it and splits it letter by letter, reverses the individual letters, and joins them back, then checks to see if it is exactly equal to the text within the teststring variable. If it is it will tell you that you have a palindrome. If not it will tell you it isnt.
function palindrome(testString) {
	testString = input.value
	 var output = document.getElementById("output3")
	 var paliString = testString.split('').reverse().join('');
	 if (paliString === testString){
	 output.innerHTML ="Bruh, Your String is a Palindrome";
	 } else output.innerHTML ="So... Its not a Palindrome";

}

// var testString = "Racecar";



// When the button is pressed or the enter key is pressed... set the value of the input inside the variable testString
// *********************************
// reversal(input);
// console.log("Reverse", reversal(testString));

//****************************************
// alphabits(input);
// console.log("Alphabit", alphabits);


// palindrome(input);
// console.log("Palindrome", palindrome);



document.getElementById("input1").onkeypress=function(e){
    if(("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ").indexOf(String.fromCharCode(e.keyCode))===-1){
        e.preventDefault();
        return false;
    }
}

button.addEventListener("click",alphabits);
button.addEventListener("click",reversal);
button.addEventListener("click",palindrome);


