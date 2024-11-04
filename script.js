/* Question 1. Add a new property to the instructor object
Objects */
let instructor = {
    name: "John Doe",
    age: 35,
    location: US  //my answer, here
    languages: ["JavaScript", "Python", "C++"]
};

console.log(user.location.city);


// Question 2. Create a function that filters topics array to only show topics with more than 5 characters

let topics = ["Variables", "Strings", "Arrays", "Objects", "Loops", "Functions"];
topics.push("Conditionals");

function topicFive (topics, length){
lenghth = 5
return topicLenghth
 };

console.log("Course topics:", topics);

function subtractNumbers(biggerNumber, smallerNumber){
    const sum = biggerNumber - smallerNumber;
    return sum;
}

const addNumber = (num1,num2) => { 
    const sum = num1 + num2
    return sum
    };

const addNumbers = (num1, num2) => num1 + num2;
         console.log(addnumber(20,6));

countriesInTheUsk.forEach((country) => console.log(country.charAt(0)));

function secondCharacter(country){
    return console.log(country.charAt(1))
    };




//Question 3. Use a while loop to simulate a simple quiz game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}