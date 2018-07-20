// 1a//  Create a variable and set its value to the answer of a math equation. It should be a number Value

var ans = 5 * 6
console.log(ans)


// 1b // Create a variable and set its value to 5 strings being concatenated together using the ‘+’ operator. Each string should be at least 10 characters long. Try and make a real paragraph that a human will be able to read and understand.

var para = {
    name: "My name is Toni-lee Maitland.",
    age: "I am 26 years old.",
    education: "I graduated from the University of Florida.",
    occupation: "I taught Social Studies to middle and high schoolers for 3 years.",
    goal: "I want to become a web developer after years of thinking about it."
}

console.log(para.name +" "+ para.age +" "+ para.education +" "+ para.occupation +" "+ para.goal)

// 1c//Create a variable and use the ES6 string interpolation (back ticks) to set the value of the variable to a string that includes 5 variables whose variables are numbers. Use ${} to use these number variables in the string variable.

var num1 = 5
var num2 = 6
var num3 = 7
var num4 = 8
var num5 = 9

var info = `The numbers are ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`

console.log(info)
    


// 1d Create an array  that has 4 numbers, 2 strings, 3 comparisons, another array with 3 elements inside.
 
var arr = [5, 6, 7, 8,"help", "me", 8==9, 5>3, 6!=7, ["test", "anxiety","blank"]]

console.log(arr[9][1])


// 1e //Create an object that has 4 properties: A number, a string, an array, and an object

var popQuiz = {
    month: 7,
    birthMon:  "November",
    monthsLeft: ["August", "September","October","November", "December"],
    daysOfTheWeek: {
        first: "Sunday",
        second: "Monday",
        third: "Tuesday"
    }
}

console.log(popQuiz)

//The other parts are in the index.html and script.js files
