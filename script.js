//If_else statement that runs one of two console.log methods
const myName = "Mitch Cuckovich";
const myAge = 25;
const myBday = "January 24";
const detroitGC = true;
const lifeEvents = ["I was born in Troy, Michigan", "I went to Hope College", "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I'm a graduate of the front-end bootcamp."];

if (detroitGC) {
    console.log("My name is " + myName + " and I am a student at Grand Circus in Detroit, Michigan. I am currently " + myAge + " years old and my birthday is on " + myBday + ".");
}
else {
    console.log("My name is " + myName + " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " + myAge + " years old and my birthday is on " + myBday + ".");
}
//for loop that starts at 0 and iterates by imcrements of 1 while i is less than the length of lifeEvents array.
for (let events of lifeEvents) {
    console.log(events);
}
//Declare and initialize a variable named counter to the value of 0.
let counter = 0;
let randomNumber = 0;
//Write a while loop with an if_else statement that has two condiions.
do {
    //randomNumber is initialized to a random integer between 1 and 10.
    randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber !== 5) {
        counter = counter + 1;
        console.log(randomNumber + " !== 5");
    }
    else {
        counter = counter + 1;
        console.log(randomNumber + " === 5. It took " + counter + " iterations to randomly generate the number 5.");
    }
}
while (randomNumber !== 5);
