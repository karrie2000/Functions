/* Predict the Output
Practice using a T-diagram to go through the following code snippets and predict the output.  Once you're done run your code and see if your prediction was correct.  Create a .js file with the code snippets and your predicted output and upload it once you're done. */

//Predict 1

function greeting() {
  return "Hello";
  console.log("World");
}
var word = greeting();
console.log(word);

//My Prediction
/* I see that the the return statment is before teh console.log. Anything that happens after a return stament gets ignored in javascript. Therefore once the console los word, it will only output "Hello".

*/

//The Output
/* 
I was right it only outputted Hello!.

*/

//Predict 2

function add(num1, num2) {
  console.log("Summing Numbers!");
  console.log("num1 is: " + num1);
  console.log("num2 is: " + num2);
  var sum = num1 + num2;
  return sum;
}
var result1 = add(3, 5);
var result2 = add(4, 7);
console.log(result1);
console.log(result2);

//My Prediction
/* I believe that the output will be :
Summing Numbers!
num1 is: 3
num2 is: 5
---the return is 8
These are both console.log(ed). The two numbers are added together to value a sum, the sum is returned , but not logged. After the return the function ends, the the console called the function again, doing the same for result2.
Summing Numbers!
num1 is: 4
num2 is: 7
---return is 11

*/

//The Output
/* 
Yes the output was correct only the console.log(s) were logged, but not the returns.

*/

//Predict 3

function highFive(num) {
  for (var i = 0; i < num; i++) {
    if (i == 5) {
      console.log("High Five!");
    } else {
      console.log(i);
    }
  }
}
highFive(10); //called function to see output

//My Prediction
/* 
I think the for loop will continue to run till the i hits the value of num. I think the output will be 0,1,2,3,4,High Five!,6,7,8.... till i reaches the 1 less of num.

*/

//The Output
/* 
Correct! I called the function and inputed 10 as num. the Output was 0,1,2,3,4,High Five!,6,7,8,9(stopping just before 10).
*/
