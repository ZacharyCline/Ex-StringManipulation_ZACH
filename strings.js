
//This keeps allows for only letters(lower and capital) to be input into the text box.
document.getElementById("input1").onkeypress=function(e){
    if(("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ").indexOf(String.fromCharCode(e.keyCode))===-1){
        e.preventDefault();
        return false;
    }
}

var input = document.getElementById("input1").value;

// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal(testString) {
	var output = document.getElementById("output");

 return output.innerHTML=testString.split("").reverse().join("");

}

function alphabits(testString) {  
	var output = document.getElementById("output2");

return output.innerHTML=testString.split("").sort().join("");  

  }  
 

//This Function takes the string passed into it and splits it letter by letter, reverses the individual letters, and joins them back, then checks to see if it is exactly equal to the text within the teststring variable. If it is it will tell you that you have a palindrome. If not it will tell you it isnt.
function palindrome(testString) {
	 var ouput = document.getElementById("output3")
	 var paliString = testString.split('').reverse().join('');
	 if (paliString === testString){
	 output.innerHTML ="Bruh, Your String is a Palindrome";
	 } else output.innerHTML ="So... Its not a Palindrome";

}

var testString = input;



//When the button is pressed or the enter key is pressed... set the value of the input inside the variable testString
//*********************************
// reversal(testString);
// console.log("Reverse", reversal(testString));

// //****************************************
// alphabits(testString);
// console.log("Alphabit", alphabits);


// palindrome(testString);
// console.log("Palindrome", palindrome);

function callEmAll (palindrome, alphabits, reversal, teststring){
	palindrome(teststring)
	alphabits(teststring)
	reversal(teststring)
}


var wordBtn = document.getElementById("button1");
wordBtn.addEventlistener("click", callEmAll(palindrome, alphabits, reversal, testString));

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well


//why do i want to create an object?

// let red {
	
// }