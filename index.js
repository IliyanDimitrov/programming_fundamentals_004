//Task #1 - Create an array of numbers. Use forEach to create a total of all the numbers.

const numArray= [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

numArray.forEach(num => sum += num);

//console.log(sum);

//Task #2 - Create an array of numbers. Use filter to keep only numbers greater than 100.

const greaterThanNumArray = [100, 2, 3, 4, 5, 6, 200, 8, 101];

const greaterThanResult = greaterThanNumArray.filter(num => num > 100);

//console.log(greaterThanResult);

//Task #3 - Create an array of numbers. Use filter to keep only even numbers.

const findEvenNumArray = [100, 2, 3, 4, 5, 6, 200, 8, 101];

const findEven = findEvenNumArray.filter(num => num % 2 == 0);

//console.log(findEven);

//Task #4 - Create an array of people’s names. Create all the names with lowercase letters only. Use map to transform each name so that it begins with a capital letter.

const namesLowerCase = ["iliyan", "james", "ellie", "heather"];

const transformUpperCase = namesLowerCase.map(name => name.toUpperCase());

//console.log(transformUpperCase);

//Task #5 - Create an array of people’s names. Use filter to keep only the names which are longer than 5 characters.


const namesBiggerThanFive = ["iliyan", "james", "ellie", "heather"];

const findBiggerThanFive = namesBiggerThanFive.filter(name => name.length > 5);


//console.log(findBiggerThanFive);

//Task #6 - Create an array of numbers, including some decimal numbers. Use filter to keep only the whole numbers.

const decimalNumArray = [1.1, 2.3, 4.5, 6.7, 8, 9];

const wholeNumsOnly = decimalNumArray.filter(num => Number.isInteger(num));

//console.log(wholeNumsOnly);

//Task #7 - Create an array of numbers, including some decimal numbers. Use forEach to sum up all the whole numbers.

let sumOfWholeNums = 0;

//const wholeNumArray = wholeNumsOnly.forEach(num => sumOfWholeNums += num);

const wholeNumArray = decimalNumArray.forEach(num => {

  if(Number.isInteger(num)) {

  sumOfWholeNums += num;

  }
});

//console.log(sumOfWholeNums);

//Task #8 - Create an array of numbers, including some decimal numbers. Use forEach to create a count of how many decimal numbers are in the array.

let decimalCount = 0;

const countDecimalsInArray = decimalNumArray.forEach(num => {

  if(!Number.isInteger(num)) {

  decimalCount++;

  }
});


//console.log(decimalCount);

//Task #9 - Create an array of numbers. Use map to create an array of the square of each of these numbers.

const squareNum = numArray.map(num => num ** 2);

//console.log(squareNum);

//Task #10 - Create an array of objects representing people. They should each have a name, age and profession property. Use map to create an array of just the names.

const people = [
{
  name: "Iliyan",
  age: 25,
  profession: "Quality Control Operative"
},
{
  name: "Ellie",
  age: 18,
  profession: "Tech Coach"
},
{
  name: "Heather",
  age: 17,
  profession: "Tech Coach"
},
{
  name: "Jamaes",
  age: 30,
  profession: "lawyer"
}];

const peopleNames = people.map(person => person.name);

//console.log(peopleNames);

//Task #11 - Create an array of objects representing people. They should each have a name, age and profession property. Use filter to create an array of people 18 years old or more.

const onlyAdults = people.filter(person => person.age > 18);

//console.log(onlyAdults);

//Task #12 - Create an array of objects representing people. They should each have a name, age and profession property. Ensure that some of these people have the profession “lawyer”. Use forEach to count how many people are lawyers.


let lawyersCounter = 0;

const countLawyers = people.forEach(person => {
  if(person.profession == "lawyer") {
    lawyersCounter++;
    console.log(`${person.name}` +" is a lawyer!");
  }});

  //console.log(lawyersCounter);

